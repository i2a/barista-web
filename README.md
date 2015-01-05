barista-web
===========

Web interface of a connected coffee machine

Developpment configuration
--------------------------

1. [Install NVM](https://github.com/creationix/nvm) and the last version of node.js.
2. Install Yeoman `npm install -g yeoman`
3. Install the angular-fullstack generator `npm install -g generator-angular-fullstack` (documentation [here](https://github.com/DaftMonk/generator-angular-fullstack))
4. [Install MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb)
5. Clone this repository and inside the project folder do a `npm install` and `bower install`

Run the application
-------------------

In the project folder, run `grunt serve` to launch the server.


API
---

### Users

| Method | URI | Description | Role |
|--------|-----|-------------|------|
| GET | /api/users | Get the list of the users | admin |
| GET | /api/users/:id | Get an user by its id | logged |
| GET | /api/users/me | Get the user used to make the request | logged |
| DELETE | /api/users/:id | Delete a user | admin |
| PUT | /api/users/:id/password | Update the password of an user | logged |
| POST | /api/users | Create a new user | all |

### Coffees

| Method | URI | Description | Role |
|--------|-----|-------------|------|
| GET | /api/coffees | Get the coffee queue | all |
| GET | /api/coffees/:id | Get a specific coffee job | all |
| DELETE | /api/coffees/:id | Delete a coffee from the queue | logged |
| POST | /api/coffees | Add a coffee to the queue | logged |