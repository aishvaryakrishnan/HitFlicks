import csv
from collections import Counter
f = open("features1.csv","rb")
lst = []
movie = ""
wr = open("wordFreq.csv", "wb")
reader1 = csv.DictReader(f)
writer = csv.writer(wr, delimiter=',')
cnt = 0
for row in reader1:
	if movie != row["Movie"]:
		for (k,v) in Counter(lst).most_common():
			l = [movie,k,v, cnt]
			writer.writerow(l)
		movie = row["Movie"]
		lst = []
		cnt = 0
	words = row["tweet"].split(" ")
	cnt = cnt + 1
	for word in words:
		if word != "" and word != " ":
			lst.append(word)
