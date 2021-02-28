const orm = require(`../config/orm`);

const burger = {
  //Sets all entries from database
  selectAll(cb) {
    orm.selectAll(`burgers`, (res) => cb(res));
  },
  //Inserts a new burger into database
  insertOne(cols, vals, cb) {
    orm.insertOne(`burgers`, cols, vals, (res) => cb(res));
  },

  //Updates an burger already in database
  updateOne(objColVals, condition, cb) {
    orm.updateOne(`burgers`, objColVals, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete(`burgers`, condition, (res) => cb(res));
  },
};

module.exports = burger;
//exporting the variable and within the variable should be four funcitons all, create, update, delete
//all refernece orm
