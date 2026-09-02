const canvas = document.getElementById('sim-canvas');
const ctx = canvas.getContext('2d');
const depthSlider = document.getElementById('depth-slider');
const heightSlider = document.getElementById('height-slider');
const startButton = document.getElementById('start-button');
const kineticBar = document.getElementById('kinetic-energy');
const potentialBar = document.getElementById('potential-energy');
const speedBar = document.getElementById('speed-bar');

// Parametri Fisici e Grafici
const BALL_RADIUS = 10;
const G = 9.81; // Accelerazione di gravità (m/s^2), usata come fattore di scala
const MAX_SPEED = 100; // Velocità massima per scalare la barra V
const TRACK_LENGTH = 760;
const TRACK_HEIGHT = 300;
const H1_VALUE = 0.95;

let animationFrameId;
let isPaused = true;
let time = 0;
let ball = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    m: 1, // Massa (semplificata a 1 per energia potenziale = altezza)
    // L'energia totale (E_totale) è impostata all'inizio in base all'altezza
    E_totale: 0
};

let h1 = H1_VALUE;
let h2 = parseFloat(depthSlider.value);
let h3 = parseFloat(heightSlider.value);

// Funzione che restituisce l'altezza del pendio ad una data coordinata x
function getTrackY(x) {
    /* Quest'equazione è l'implicitizzazione della curva di Bezier
     * definita dai quattro punti P₁=(0, h₁), P₂=(0.25, h₂), P₃=(0.5,
     * h₃), P₄=(1, h₄), dove h₁ è l’altezza iniziale, h₂ controlla la
     * profondità della depressione (ma non è la profondità! è una
     * curva di Bezier, non una spline!), e h₃ il livello del piano.
     * Il fatto che il punto a x=0.5 e a x=1 abbiano la stessa altezza
     * obbliga la curva di Bezier ad appiattirsi sulla destra.
     *
     * L’equazione parametrica della curva è
     *
     *   P(t) = (1-t)³ P₁ + 3 (1 - t²) t P₂ + 3 (1 - t) t² P₃ + t³ P₄
     *
     * e l’implicitizzazione viene fatta risolvendo P_x(t) = x per t
     * e sostituendo in P_y(t). Ovviamente ho fatto il calcolo in
     * Mathematica!
     */

    const t = x / TRACK_LENGTH;

    if (t < 0) return h1;
    if (t > 1) return h3;

    const alpha = Math.sqrt(1 + 4 * t * t);
    const beta = Math.cbrt(2 * t + alpha);

    return TRACK_HEIGHT - TRACK_HEIGHT * (12 * h2 - 6 * h3 +
        (3 * h1 + 3 * h3 * (1 + 4 * t + 2 * alpha - 2 * beta)
         - 6 * h2 * (1 + 2*t + alpha - beta) + 3*(h1 - 2*h2 + h3)*(2*t + alpha)*beta - (5*h1 + 4*(h1 - 3*h2 + 2*h3)*t)* beta * beta)
            / Math.pow(2 * t + alpha, 2. / 3.));
}

function getSlope(x) {
    /* We might calculate the derivative analytically, but it would be
     * too long. Just compute a quick approximation */
    return getTrackY(x + 1) - getTrackY(x);
}

// Funzione per disegnare il terreno
function drawTrack() {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height); // Inizia dal fondo a sinistra

    // Disegna il percorso da sinistra a destra
    for (let x = 0; x <= TRACK_LENGTH; x++) {
        let y = getTrackY(x);
        // La traccia non è la linea di base, ma è la "superficie"
        ctx.lineTo(x, y);
    }

    ctx.lineTo(TRACK_LENGTH, canvas.height); // Torna in basso a destra
    ctx.closePath();

    ctx.fillStyle = '#6c757d'; // Grigio per il terreno
    ctx.fill();
    ctx.strokeStyle = '#343a40';
    ctx.stroke();
}

// Funzione per disegnare la palla
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y - BALL_RADIUS, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function updateEnergyBars() {
    const potentialEnergy = G * (TRACK_HEIGHT - ball.y);
    const totalEnergyBarWidth = 100; // 100%
    const potentialWidth = potentialEnergy / ball.E_totale * totalEnergyBarWidth;
    const kineticWidth = totalEnergyBarWidth - potentialWidth;

    kineticBar.style.width = `${kineticWidth}%`;
    potentialBar.style.width = `${potentialWidth}%`;
}

// Funzione di aggiornamento della simulazione (Logica semplificata)
let last_x = null;
let last_y = null;

function updateSimulation(dt) {
    if (isPaused)
        return;

    /* Instead of solving Newton’s equations, we calculate the
     * acceleration and increment the x position of the ball, and then
     * we impose the conservation of energy to recompute the
     * velocity. In this way, we ensure energy conservation */

    const currentTrackY = getTrackY(ball.x);
    const angle = Math.atan(getSlope(ball.x)); // Slope of the hill
    const accel = Math.sin(angle) * G; // Acceleration along the slope

    const accel_x = accel * Math.cos(angle);
    const accel_y = accel * Math.sin(angle);

    ball.x += ball.vx * dt + 0.5 * accel_x * dt * dt;
    ball.y = getTrackY(ball.x);

    // Now energy conservation kicks in!
    const potentialEnergy = G * (TRACK_HEIGHT - ball.y);
    const v = Math.sqrt(2 * (ball.E_totale - potentialEnergy));

    ball.vx = v * Math.cos(angle);
    ball.vy = v * Math.sin(angle);

    // Aggiorna le barre di Energia
    updateEnergyBars();

    // Aggiorna la barra della Velocità
    // Scala v su MAX_SPEED
    const speedWidth = Math.min(100, (v / MAX_SPEED) * 100);
    speedBar.style.width = `${speedWidth}%`;

    // Controllo fine simulazione
    if (ball.x > TRACK_LENGTH - 1.5 * BALL_RADIUS || ball.vx < 0) {
        ball.x = TRACK_LENGTH - BALL_RADIUS;
        ball.vx = 0;
        ball.vy = 0;
        drawTrack();
        drawBall();
        pauseSimulation();
    }
}

// Funzione principale di loop
function gameLoop(timestamp) {
    if (!isPaused) {
        // 1. Pulisci canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 2. Disegna
        drawTrack();
        updateSimulation(0.2);
        drawBall();

        animationFrameId = requestAnimationFrame(gameLoop);
    }
}

// Funzioni di Controllo
function startSimulation() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    // Reset della palla
    ball.x = 0;
    ball.y = getTrackY(0);
    ball.vx = 0;
    ball.vy = 0;

    last_x = null;
    last_y = null;

    // L'energia totale è l'energia potenziale iniziale (E = mgh)
    ball.E_totale = G * TRACK_HEIGHT;

    // Inizializza le barre (50/50 per esempio, o K=0, U=100)
    kineticBar.style.width = '0%';
    potentialBar.style.width = '100%';
    speedBar.style.width = '0%';

    isPaused = false;
    startButton.textContent = "Ricomincia";
    gameLoop();
}

function pauseSimulation() {
    if (! isPaused) {
        isPaused = true;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    } else {
        isPaused = false;
        game3loop();
    }
}

// Aggiornamento Sliders
function updateSliders() {
    h1 = H1_VALUE;
    h2 = parseFloat(depthSlider.value);
    h3 = parseFloat(heightSlider.value);

    // Fix the height of the ball if the slope changes
    ball.y = getTrackY(ball.x);

    // Update the energy bars
    updateEnergyBars();

    // Redraw everything whenever the slope changes
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTrack();
    drawBall();

    pauseSimulation();
}

// Event Listeners
depthSlider.addEventListener('input', updateSliders);
heightSlider.addEventListener('input', updateSliders);
startButton.addEventListener('click', startSimulation);

// Inizializzazione
updateSliders();

// Disegna la palla nella posizione iniziale
ball.x = 0;
ball.y = getTrackY(0);
drawBall();
