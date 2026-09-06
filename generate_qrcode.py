import qrcode

url = "https://davide-bianchi-astro.github.io/tecniche-audio/"

qr = qrcode.QRCode(
    version=None,  # Automatically determine the required size
    error_correction=qrcode.constants.ERROR_CORRECT_M,
    box_size=10,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

image = qr.make_image(
    fill_color="black",
    back_color="white",
)

image.save("qrcode.png")

exit()
