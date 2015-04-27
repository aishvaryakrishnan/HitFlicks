import csv
import json
f = open("wordFreq.csv","rb")
csvread = csv.DictReader(f)
mov = ""
output = {'movies': []}
d = {}
for row in csvread:
	if mov != row["Movie"]:
		if(len(d) > 0):
			output["movies"].append(d)
			d = {}
		mov = row["Movie"]
		d['Title'] =row["Movie"]
		d['count'] = row["count"]
		d['cnt']=[]
	if len(row["word"]) > 1 and not "http" in row["word"]:
		d["cnt"].append({"word":row["word"],"freq":row["Freq"]})

json.dump(output,open("words.json","wb"))
	
