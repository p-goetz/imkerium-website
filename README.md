# Imkerium Website

Bootstrap and AngularJS website to provide information about beekeepers, their products and contact information. 

## Technical Setup 

- Bootstrap as template
- AngularJS as Javascript framework
	- ui-router to provide in-app routing
	- resource to access RESTful web service backend

## Folder Structure

- app/
	- index.html: website start point
	- images/: website images
	- scripts/
		- app.js: configure routing and views
		- controllers.js: implement controller logic
		- services.js: implement access to RESTful services
	- styles/: CSS styles
	- views/: views used by AngularJS
- bower.json: web dependencies configuration
- package.json: node module setup and dependencies

## Run 

deploy '''app/''' content to web server and serve '''index.html'''.
