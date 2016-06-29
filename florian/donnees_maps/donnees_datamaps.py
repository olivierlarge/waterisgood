import csv

serie_pop=[]
pop_country=[]

with open("pop_data1990.csv","rU") as file:
	next(file,None)
	next(file,None)
	next(file,None)
	next(file,None)
	cr = csv.reader(file)
	for row in cr:
		#print row[3]
		pop_country=[]

  		if (row[3]!=""):
  			pop_country.append(row[1])
  			pop_country.append(1000*(float(row[3])+1))
  			serie_pop.append(pop_country)

print (serie_pop)

with open("serie_pop_1990.txt","w") as file2:
	file2.write(str(serie_pop))

