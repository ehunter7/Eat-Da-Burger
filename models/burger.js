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
  updateOne(objColVals, cb) {
    orm.updateOne(`burgers`, condition, (res) => cb(res));
  },
  delete(condition, cb) {
    orm.delete(`burgers`, condition, (res) => cb(res));
  },
};

module.exports = burger;
//exporting the variable and within the variable should be four funcitons all, create, update, delete
//all refernece orm
