import matplotlib as mpl
import matplotlib.pyplot as plt
import numpy as np
# import pandas as pd
# pip install pandas --user	#requires admin privileges to install for some reason


###########################################
#     IMAGE DRAWING HELPER FUNCTIONS      #
###########################################
# https://stackoverflow.com/questions/7449585/how-do-you-set-the-absolute-position-of-figure-windows-with-matplotlib  cxrodgers's answer
""" Way to set where the matplotlib window spawns on the screen"""
def moveFigureTo(fig, x, y):
	"""Move figure's upper left corner to pixel (x, y)"""
	backend = mpl.get_backend()
	if backend == 'TkAgg':
		fig.canvas.manager.window.wm_geometry("+%d+%d" % (x, y))
	elif backend == 'WXAgg':
		fig.canvas.manager.window.SetPosition((x, y))
	else:
		# This works for QT and GTK
		# You can also use window.setGeometry
		fig.canvas.manager.window.move(x, y)

global plateID
plateID = 0

def getPlateID():
	global plateID
	plateID += 1
	return plateID

# https://stackoverflow.com/questions/10369681/how-to-plot-bar-graphs-with-same-x-coordinates-side-by-side-dodged
def drawSideBySideGraph():
	plate_ID = getPlateID()
	numBarPairs = 3
	barWidth = 0.3

	# Data on X-axis
	# Specify the values of blue and orange bars (height)
	blueBars = (10, 20, 30)
	orangeBars = (60, 70, 80)

	# Position of bars on x-axis
	ind = np.arange(numBarPairs)

	plt.figure(figsize=(10,5))

	# Plotting
	plt.bar(ind, blueBars , barWidth, label='Nutrition - Ideal daily consumption')
	plt.bar(ind+barWidth, orangeBars, barWidth, label='Nutrition - User-provided image of food')

	plt.xlabel('Nutrition Types')					# x-axis label
	plt.ylabel('Amount (oz food / kg bodyweight)')	# y-axis label
	plt.title('Nutrition in your meal')				# title of entire plot

	# xticks()
	# First argument - A list of positions at which ticks should be placed
	# Second argument -  A list of labels to place at the given locations
	# plt.xticks(ind + barWidth / 2, ('Xtick1', 'Xtick3', 'Xtick3'))

	# Finding the best position for legends and putting it
	plt.legend(loc='best')
	
	plt.savefig("plate"+str(plate_ID)+".svg")	# Scalable Vector Graphics for possibly large monitors
	plt.show()	# IF YOU SHOW BEFORE SAVING THE FIGURE, THE FIGURE DATA GETS ELIMINATED
drawSideBySideGraph()