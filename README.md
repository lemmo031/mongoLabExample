# addingMongo
Adding more complicated routing as well as mongo

## Project Setup
Install dependancies by running:

````
npm install && bower install
````

## Adding mongo.js
Connecting to a mongo database requires spacifying a user name, a password, and a few other parameters.
This information is stored in a file mongo.js in the config directory. Such files are stored locally on the server and are excluded from git commits (added to .gitignore). This project contains a sample mongo.js file (mongo.example.js). However, it connects to a test database which doesn't store data between project runs.

Since mongo.js is required (but currently not used), just copy mongo.example.js into mongo.js in the same directory to avoid a run-time error.
It will not be added to the repository since it is listed in .gitignore.

## Running the project
To serve the project, run:

````
grunt serve
````

## Testing the project
To run automated testing on the project, run:
````
grunt test
````
Or run karma through the Webstorm GUI.

## Resources
Bootstrap Components:
http://getbootstrap.com/components/

Getting started with mongo:
http://try.mongodb.org/





