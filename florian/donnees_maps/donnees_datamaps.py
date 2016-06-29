import csv

serie_pop=[]
pop_country=[]

with open("water_improved_2005.csv","rU") as file:
	next(file,None)
	next(file,None)
	next(file,None)
	next(file,None)
	cr = csv.reader(file)
	for row in cr:
		#print row[3]
		pop_country=[]

  		if (row[3]!="" and row[0]!="Total"):
  			pop_country.append(row[1])
  			print (row[3])
  			pop_country.append(float(row[3]))
  			serie_pop.append(pop_country)

print (serie_pop)

with open("water_improved_2005.txt","w") as file2:
	file2.write(str(serie_pop))