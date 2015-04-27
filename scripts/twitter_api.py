import twitter
import pandas
import csv
import time

api = twitter.Api(
 consumer_key ='YIr7l9SpsHw4897YMmsUexcPI',
consumer_secret ='Q4ZcpHg3M4JK0KGKNQLTfM7On4AKCqDlQVggSoIGn2mnLQpPzy',
access_token_key ='108530990-RqAYgrhtomisTOrlA2CqqfThy8TEIh3NwEze2fo2',
access_token_secret ='VBvRRv5PMpQER9wqrqi1wRzVTGptJHlGq5xkfrKQZ4Ddf'
 )

data = pandas.DataFrame.from_csv('movies20142.csv',sep=',',header=0)
movie_list = data.Title.tolist()
csvwrite = csv.writer(open('features.csv', 'wb'),delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
for movie in movie_list:
	try:
		search = api.GetSearch(term=movie, lang='en', result_type='recent')
		for t in search:
			l = [t.user.screen_name,t.created_at,t.text.encode("ascii","ignore")]
			csvwrite.writerow(l)
	except Exception:
		 print "error"
		 break

