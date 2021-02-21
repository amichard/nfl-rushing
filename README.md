# theScore "the Rush" Interview Challenge
At theScore, we are always looking for intelligent, resourceful, full-stack developers to join our growing team. To help us evaluate new talent, we have created this take-home interview question. This question should take you no more than a few hours.


### Installation and running this solution
Requirements:
* Docker https://docs.docker.com/get-docker/
* Port 3000 and 8000 to be free

*Tested in MacOS and it should work on Linux. Windows might have some trouble running some shell scripts, but it should be able to run the application.*


To setup the application, execute the command in your terminal:
```
docker-compose up
```

To run the application, go to your browser and navigate to:
```
http://localhost:3000/
```

You can see how the api returns the results by going to:
```
http://localhost:8000/api/rushing-stats
```

You can also access the "admin" section by going to:
```
http://localhost:8000/admin
```
*Please note that you'll need to create a super user first before you can access the admin section*

If you get into the container, you can run various scripts to test, refresh the database or lint.
To get into the container, run the following in a new terminal window:
```
docker-compose exec api bash
```
*If you're using windows, Shell scripts might not work on their native command prompt. A 3rd-part application like cygwin, might be able to solve the issue. Unix for Windows might also work, but I wasn't able to test it, unfortunately*

* This should let you in the container, you can then run the test command:
```
./test.sh
```

Or you can reload the data by executing:
```
./init.sh
```

Or check if the code conforms to pycodestyle:
```
./pycodestyle.sh
```

Or create a superuser:
```
python manage.py createsuperuser
```

You can actually load a different json file by executing:
```
python manage.py load_rushing_stats <json_file>
```
where `<json_file>` is the file you want to import.


### Background and Tech Stack
Backend
* Django (Python)
* Postgres

Frontend
* React
* Bootstrap 4
* Webpack
* Node

I used django for the backend as it's the most familiar for me. 
It's currently used as a rest API and will return json as a response.

For the frontend, I used React with Bootstrap for the styling.
Things are automatically bundled with `Webpack` and served with `Webpack dev server`.

The application can sort with any of the columns by clicking on the secondary header and is 
highlighted with a blue line. You can even sort with multiple columns by holding shift then
click on additional columns.

The application will filter as you type on the respective input field below the header.
Name has a special filter applied where it looks whether first name or last name contains the search term 
and Team searches for both the team code or team name.

To handle large datasets, I used server-side paging as well. By default `react-table` expects all records to be
loaded right away.

I renamed `rushing.json` to `data.json` and placed it on `django/api/fixtures`.
*Original should still be in the root folder.*

Django Rest Framework provides a way to see what the backend api is showing.
You can take a look by navigating to:
```
http://localhost:8000/api/rushing-stats
```

I also downloaded a code from github that allows us to order by through a related column. Otherwise,
it'll need quite the complex solution.


### Challenge Background
We have sets of records representing football players' rushing statistics. All records have the following attributes:
* `Player` (Player's name)
* `Team` (Player's team abbreviation)
* `Pos` (Player's postion)
* `Att/G` (Rushing Attempts Per Game Average)
* `Att` (Rushing Attempts)
* `Yds` (Total Rushing Yards)
* `Avg` (Rushing Average Yards Per Attempt)
* `Yds/G` (Rushing Yards Per Game)
* `TD` (Total Rushing Touchdowns)
* `Lng` (Longest Rush -- a `T` represents a touchdown occurred)
* `1st` (Rushing First Downs)
* `1st%` (Rushing First Down Percentage)
* `20+` (Rushing 20+ Yards Each)
* `40+` (Rushing 40+ Yards Each)
* `FUM` (Rushing Fumbles)

In this repo is a sample data file [`rushing.json`](/rushing.json).

##### Challenge Requirements
1. Create a web app. This must be able to do the following steps
    1. Create a webpage which displays a table with the contents of [`rushing.json`](/rushing.json)
    2. The user should be able to sort the players by _Total Rushing Yards_, _Longest Rush_ and _Total Rushing Touchdowns_
    3. The user should be able to filter by the player's name
    4. The user should be able to download the sorted data as a CSV, as well as a filtered subset
    
2. The system should be able to potentially support larger sets of data on the order of 10k records.

3. Update the section `Installation and running this solution` in the README file explaining how to run your code

