const orm = require(`../config/orm`);

//Sets all entries from database
orm.selectAll(`burgers`);

//Inserts a new burger into database
orm.insertOne(`burgers`, newBurger);

//Updates an burger already in database
orm.updateOne(`burgers`, newBurger, idNum);

module.exports = orm;

//exporting the variable and within the variable should be four funcitons all, create, update, delete
//all refernece orm
