#!/usr/bin/env python3

import numpy as np
import matplotlib

matplotlib.use("Agg")

import matplotlib.pylab as plt

data1 = np.loadtxt("seraphic-fire.txt.gz", skiprows=1)
data2 = np.loadtxt("karl-bohm.txt.gz", skiprows=1)

plt.semilogx(data1[:, 0], data1[:, 1], label="Seraphic Fire")
plt.semilogx(data2[:, 0], data2[:, 1], label="Karl Bohm")
plt.legend()
plt.xlabel("Frequenza [Hz]")
plt.ylabel("Intensità [dB]")
plt.xlim(100, 5e3)
plt.ylim(-100, -20)
plt.savefig("tuba-mirum-spectrum.svg", bbox_inches="tight")
