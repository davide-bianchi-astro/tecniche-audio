#!/usr/bin/env python3

import numpy as np
import matplotlib

matplotlib.use("Agg")

import matplotlib.pylab as plt

data1 = np.loadtxt("filtered-spectrum-before.txt.gz", skiprows=1)
data2 = np.loadtxt("filtered-spectrum-after.txt.gz", skiprows=1)

plt.semilogx(data1[:, 0], data1[:, 1], label="Prima del filtro passa-basso")
plt.semilogx(data2[:, 0], data2[:, 1], label="Dopo il filtro passa-basso")
plt.legend()
plt.xlabel("Frequenza [Hz]")
plt.ylabel("Intensità [dB]")
plt.xlim(100, 5e3)
plt.ylim(-100, -20)
plt.savefig("filtered-spectrum.svg", bbox_inches="tight")
