HitFlick$

Team Members
→ Aishvarya Krishnan - aishvarya.krishnan@gatech.edu
→ Rakesh Surapaneni - srakesh@gatech.edu
→ Prajwal Rajendra Prasad - prp3@gatech.edu

Description of data/project files
Datafiles
movies2014.tsv is the list of movies alongwith opening and gross revenues
Project scripts
parse_movies.py- movies from movies2014.tsv are parsed and corresponding features obtained and aggregated
imdb_data.py- get features from OMDB API related to a movie
rt_data.py- get features from Rotten tomatoes API related to a movie
generatemonthlyjson.py - generates json file requied for monthly movie prediction which is used for monthly movie statistical visualization.
rmsle.py- calculates rmsle when actual and predicted values are input
wordscsvtojson.py - convert csv to json for word frequency
twitter-api.py - download tweets for movie name as keywords
wordfreq.py - generate word frequency pairs for the movie related tweets
Once features are obtained as a tsv file, we clean it using a python script or in Excel and convert it to a csv file. This must be input to Weka.
Weka
In Weka, movie name column must be filtered. 
Also, gross revenue is removed and opening revenue is marked as prediction when predicting opening revenue. When gross revenue is predicted that should be used as our class label.
Run classification algorithms, SMOreg, Linear Regression and decision stump.
The predicted values and actual values are copied to a text file and rmsle is calculated using rmsle.py

Running the applications
Project source code on github - https://github.com/aishvaryakrishnan/HitFlicks/tree/gh-pages Our application is hosted on github pages at http://aishvaryakrishnan.github.io/HitFlicks/www/

To use our application, no installation is required. Navigate to the github link to our application mentioned above and there are 3 tabs for the various visualizations - 
Twitter - This tab consists of charts related to twitter sentiments for movies released in first week of April 2015
Reviews - This tab contains correlation charts for the reviews and ratings and the accuracy of our prediction model using three different algorithms for year 2014 data
Predictions - Consists of various visualizations of our prediction model such as comparison of predicted and actual revenues, Twitter word cloud for the movies released in first week of April 2015 and monthly analysis of predicted gross revenues for Y2014 movies.
