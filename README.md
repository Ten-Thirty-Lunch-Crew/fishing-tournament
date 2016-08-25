# fishing-tournament

This application was generated using the Yeoman generator [ng-fullstack](https://github.com/angular-fullstack/generator-angular-fullstack).  See the [getting started](https://github.com/ericmdantas/generator-ng-fullstack/wiki/Getting-Started) for more information on install requirements, dependencies, etc.

### Description

A simple fishing tournament application written in the MEAN stack that allows the management and participation of fishing tournaments.

### Generating Test Data Locally

For development, there is a Gulp task set up to generate test data locally.  This task is currently set up to replace any existing data in the collections of the same name, so use with caution if you have generated any important data locally that you do not wish to lose.  

To run this gulp task, make sure that your local `mongod` process is running so that you have a MongoDB instance running on localhost with the default port of 27017.  Then run the following gulp task:

`gulp reload_local_mongo`

This task pulls all files from db/metadata/\*.json and creates a collection for each file.  The collection name will be the same as the JSON file name.  To add new test data simply create valid JSON data and place the \*.json file in the db/metadata/ directory and the gulp task will pick it up on the next run.
