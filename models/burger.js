const orm = require(`../config/orm`);

//Sgets all entries from database
orm.selectAll(`burgers`);

//Inserts a new burger into database
orm.insertOne(`burgers`, newBurger);

//Updates an burger already in database
orm.updateOne(`burgers`, newBurger, idNum);

//TODO: what to export
