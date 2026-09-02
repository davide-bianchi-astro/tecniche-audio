# Introduzione all’argomento di oggi

-   Studieremo i moti oscillatori e ne vedremo i tipi più importanti
-   Introdurremo i concetti di “periodo” e di “frequenza”
-   Introdurremo il concetto di “onda”

# Inquisitori accademici onorari

# Oscillazioni

# Cos’è un’oscillazione?

-   Un’oscillazione è un movimento periodico di un corpo che si sposta tra due posizioni estreme
-   Semplificando, è un moto “avanti e indietro” che si ripete
-   Alcuni esempi:
    -   Altalena
    -   Pendolo di un orologio
    -   Corda di una chitarra

# Oscillazioni e forze

::: side-by-side

::: content

-   Evidentemente le oscillazioni sono possibili solo se è in gioco qualche forza!
-   Perché un corpo torni indietro, è infatti necessario che una forza lo faccia decelerare fino a fermarlo, per poi farlo tornare indietro
-   Le forze adatte allo scopo sono molte:

    -   Elastiche (molla)
    -   Gravitazionale (altalena, pendolo)
    -   Etc.

:::

::: media

![](media/pendulum-no-text.gif)

:::
:::


# Forze elastiche

-   Le forze elastiche sono ovviamente quelle associate all’energia elastica $E_e$ che avevamo visto [nella scorsa lezione](tomasi-lezione-03.html#energia-elastica)

-   Quando un corpo elastico viene deformato da una forza esterna, esso cerca di riportarsi alla forma originaria

-   Esempi:

    -   Elastici da cucina

    -   Molle degli orologi

    -   Strumenti musicali a corda (violino, chitarra, arpa, pianoforte…)

# Forze elastiche

::: side-by-side

::: content

-   Una forza elastica:
    -   Richiama verso **sinistra** quando il corpo è deformato verso destra
    -   Richiama verso **destra** quando il corpo è deformato verso sinistra
-   Ovviamente potete sostituire a destra/sinistra anche alto/basso, avanti/indietro… Il concetto resta sempre lo stesso

:::

::: media

![](media/oscillating-spring.gif)

:::
:::

# Energia elastica

-   In termini di energia:
    -   Quando si allunga/comprime una molla, si accumula energia elastica
    -   Rilasciandola, l’energia elastica si converte in energia cinetica
    -   Nel caso ideale, l’energia elastica e cinetica continuano a convertirsi tra loro, mantenendo la somma uguale

---

<iframe src="iframes/ideal-oscillator.html" width="100%" height="700" style="border:1px solid #ccc; border-radius: 8px;"></iframe>


# Il pendolo

::: side-by-side

::: content
-   Quando spostiamo la massa di un pendolo, la gravità tenta di tirarla verso il basso…
-   …ma l’asta la costringe a muoversi lungo un arco
-   La combinazione della gravità e dell’asta fa sì che nel punto più basso la spinta della gravità si annulla, mentre è massima agli estremi: proprio come una molla!
-   Attenzione: non c’è energia elastica ma potenziale gravitazionale! Però la forma del movimento e il comportamento della forza sono gli stessi di una molla
:::

::: media

![](media/orologio-a-pendolo.jpg){height=400px}

:::
:::


# Periodo e frequenza

-   Il tempo perché un pendolo o una molla faccia un’oscillazione completa è detto **periodo**, e di solito si indica con $T$ (il **semiperiodo** è invece $T/2$).
-   Viene molto usata anche la quantità inversa, la **frequenza** $\nu$:

    \[
    \nu = \frac1{T} \quad \Rightarrow \quad T = \frac1\nu.
    \]

-   Nel SI, il periodo si misura in secondi e la frequenza in s⁻¹. L’unità s⁻¹ viene indicata anche con il simbolo Hz (“Hertz”)

-   **Trucco pratico**: Un numero in Hertz dice quante oscillazioni si compiono in un secondo.


# Esempi di periodi e frequenze

# Il diapason {#diapason}

::: side-by-side

::: content

-   Il diapason è uno strumento che si usa per accordare gli strumenti musicali

-   È fatto da una forcella metallica, dimensionata in modo da oscillare 440 volte al secondo

-   La frequenza di oscillazione è quindi 440 Hz, e il periodo è

    \[
    T = \frac1{\nu} = \frac1{440\,\text{Hz}} \approx 0{,}0023\,\text{s} = 2{,}3\,\text{ms}.
    \]

:::

::: media

![](media/diapason.webp)

:::
:::

# L’orologio a pendolo

-   Un diapason oscilla sempre a 440 Hz: non può oscillare ad un’altra frequenza!

-   Già Galileo Galilei scoprì che questo è vero anche per un pendolo: **a patto di non fargli fare movimenti troppo ampi**, il suo periodo resta sempre lo stesso

-   Galileo stabilì che l’unico mezzo per variare il periodo di un pendolo è accorciare o allungare la corda

-   (No, aumentare o diminuire la massa non cambia il periodo!)

-   È questo che rende possibile l’esistenza degli orologi a pendolo

---

<iframe src="iframes/simple-pendulum.html" width="100%" height="700" style="border:1px solid #ccc; border-radius: 8px;"></iframe>


# Il metronomo

::: side-by-side

::: content

-   A differenza del diapason e dei pendoli, la frequenza del metronomo è aggiustabile mediante un cursore mobile

-   Se siete curiosi, [questo video](https://www.youtube.com/watch?v=M8wBNKHN9Cs) spiega il suo funzionamento

-   I numeri del metronomo non indicano gli Hertz, ma i “battiti al minuto”

-   Per un *Allegro vivace* potreste scegliere 120 battiti al minuto, che corrisponde a $T = 0{,}5\,\text{s}$ e $\nu = 2\,\text{Hz}$.

:::

::: media

![](media/metronome-animation.webp)

:::
:::

# Il pianoforte

::: side-by-side

::: content

-   Il pianoforte copre circa sette ottave: la corda più grave (La₀) oscilla a 27 Hz, quella più acuta (Do₈) a 4.190 Hz!

-   Ad ogni ottava la frequenza raddoppia:

    | Nota | Frequenza (Hz) |
    |------|---------------:|
    | La₀  |           27,5 |
    | La₁  |           55,0 |
    | La₂  |          110,0 |

:::

::: media

![](media/Kisting-Pianoforte.jpg)

:::
:::


# Il cuore umano

::: side-by-side

::: content

-   Il battito cardiaco a riposo è di circa 60 pulsazioni al minuto

-   Il periodo è quindi $T = 1\,\text{s}$, e la frequenza è $\nu = 1\,\text{Hz}$

-   Per curiosità, il battito a riposo di un colibrì è di 600 pulsazioni al minuto, quindi $T = 0{,}1\,\text{s}$ e $\nu = 10\,\text{Hz}$.

:::

::: media

![](media/heart-beat.webp)

:::
:::

# Terremoti

::: side-by-side

::: content

-   Il periodo di oscillazione di un’onda sismica è molto variabile

-   Nell’immagine a fianco ([terremoti del 2010–2011 a Christcurch, in Nuova Zelanda](https://it.wikipedia.org/wiki/Terremoto_di_Christchurch_del_2011)) si può stimare che il periodo dell’onda fosse inferiore al secondo, quindi $1\,\text{Hz} < \nu < 10\,\text{Hz}$.

:::

::: media

![](media/earthquake-christcurch.webp)

:::
:::


# Giostra

Provate a stimare il periodo e la frequenza di questa giostra:

<video width="960" height="540" controls>
  <source src="media/giostra.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

Originale su [YouTube](https://youtu.be/zTyqUf3E2xk?si=OAZtpeEWosCZvc_k)


# Tipi di moti oscillatori

# Oscillazioni libere

::: side-by-side

::: content

-   Le “oscillazioni libere” sono tutte quelle oscillazioni originate da una forza che, dopo aver dato un impulso iniziale, cessa di operare
-   In seguito a quell’impulso, l’oscillazione continua grazie alla sola forza elastica o gravitazionale
-   Il moto di un pendolo o di una molla è solo in prima approssimazione libero

:::

::: media

![](media/oscillating-spring.gif)

:::
:::


# Oscillazioni smorzate

-   Nella realtà, ci sono sempre altre forze in gioco che fermano le oscillazioni: un’altalena, se non spinta periodicamente, si ferma!

-   È quindi impossibile avere un’oscillazione libera **perpetua**

-   Quali sono queste forze aggiuntive che impediscono alle oscillazioni di continuare?

# Arresto di un’altalena

::: side-by-side

::: content

-   Le forze che arrestano un’altalena sono le seguenti:

    -   L’attrito dell’aria in cui è immersa l’altalena

    -   Il non perfetto scorrimento delle sospensioni (catene o corde) intorno ai perni

-   Queste forze convertono l’energia cinetica e potenziale dell’oscillazione in **calore**, che si disperde sia nell’aria che nelle sospensioni

:::

::: media

![](media/altalena.jpg)

:::
:::

# Forze viscose

-   L’attrito dell’aria è una cosiddetta **forza viscosa**
-   Le forze viscose intervengono quando un corpo si muove, mentre sono nulle se il corpo è fermo
-   In altre parole, più velocemente un corpo si muove, più intense sono le forze viscose, secondo la formula

    \[
    F = - c v,
    \]

    dove il segno meno indica che la forza si oppone sempre alla velocità, e $c$ è un coefficiente che dipende dalla viscosità del fluido, dalle dimensioni del corpo e dalla sua forma.

# Forze viscose

-   Il coefficiente $c$ ha queste unità di misura:

    \[
    c = \frac{F}{v} \quad \Rightarrow \quad \left[c\right] = \mathrm{kg/s}.
    \]

    Non sforzatevi di ricavarne un senso profondo: è più facile pensare che sono semplicemente derivate dalla definizione di $c$!

-   Più è grande $c$, più resistenza oppone il fluido in cui si muove il corpo: il miele offre più resistenza dell’acqua!

# Corpi in caduta nell’aria

::: side-by-side

::: content

-   Un corpo in caduta aumenta la sua velocità di 10 m/s ogni secondo che passa. Ma dopo un certo tempo la forza viscosa dell’aria arriva a bilanciare quella di gravità, rendendo la velocità costante

-   Grazie all’aria, la velocità delle gocce di pioggia non supera gli 8 m/s: senza di essa l’impatto a terra sarebbe come quello di una palla da bowling che cade da 1  m!

-   I paracadute funzionano perché $c$ è grande

:::

::: media

![](media/paracadute.jpg)

:::
:::

# Oscillazioni smorzate

-   Un oscillatore che subisce una forza viscosa rallenta progressivamente il suo moto

-   Se non intervengono forze, l’oscillazione è destinata ad interrompersi dopo un certo tempo

-   Un esempio è una molla che oscilla in un fluido: potete pensare all’aria, ma è più efficace se pensate alla molla immersa sott’acqua

# Smorzamento critico

::: side-by-side

::: content
-   Se le forze che si oppongono all’oscillazione sono intense, il corpo potrebbe non oscillare proprio!

-   Quello che succede è che la molla torna alla posizione di riposo, e non la oltrepassa: si ferma e da lì non si muove più

-   Questo è desiderabile in certi casi: ad esempio, gli ammortizzatori delle auto realizzano uno smorzamento critico per evitare che le sospensioni dell’auto oscillino troppo dopo una buca
:::

::: media

![](media/automobile-buca.jpg)

:::
:::

# Smorzamento critico

-   Si può calcolare (ma è complicato!) quanto deve valere $c$ per avere uno smorzamento critico; il risultato è

    \[
    c_\text{crit} = 2\sqrt{k m},
    \]

    dove $k$ è la costante della molla e $m$ è la massa del corpo attaccato alla molla.

-   Se $c$ è maggiore di questo valore critico, non si hanno oscillazioni

---

<iframe src="iframes/damped-oscillator.html" width="100%" height="700" style="border:1px solid #ccc; border-radius: 8px;"></iframe>

# Risonanza

# Risonanza

-   Di solito, se si mette in moto un sistema oscillante, si desidera che l’oscillazione continui! (Non è il caso delle sospensioni delle auto…)

-   Senza un meccanismo che impedisca lo smorzamento dell’oscillazione, un orologio o un metronomo sarebbero ben poco utili!

-   Per poter vincere le forze viscose e di attrito (che “degradano” l’energia), è necessario fornire periodicamente energia:

    -   Tramite una molla (metronomo, orologio a molla)

    -   Tramite una batteria (orologio al quarzo)

---

<iframe src="iframes/resonant-system.html" width="100%" height="700" style="border:1px solid #ccc; border-radius: 8px;"></iframe>

---

# Ampiezza infinita?

-   Se la viscosità è sotto una certa soglia, ad ogni periodo di oscillazione l’ampiezza aumenta, potenzialmente fino all’infinito (se non si rompe prima la molla…)

-   Per capire come si comporta un oscillatore in risonanza, bisogna quindi tenere conto di questi fattori:

    -   L’intensità della forzante, che tende a far **aumentare** l’ampiezza

    -   L’intensità delle forze viscose, che tende a **ridurre** l’ampiezza


# Conclusioni

# Cosa sapere per l’esame

-   Periodo e frequenza, valori tipici delle oscillazioni viste in classe
-   Oscillazioni libere e smorzate
-   Risonanza

---
title: Fisica -- Lezione 5
subtitle: Oscillazioni
author: Maurizio Tomasi ([`maurizio.tomasi@unimi.it`](mailto:maurizio.tomasi@unimi.it))
date: Lunedì 3 novembre 2025
...
