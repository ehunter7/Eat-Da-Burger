const connection = require("./connection");

require(`connection.js`);

const orm = {
  selectAll(table) {
    const queryString = `SELECT * FROM ??`;
    connection.query(queryString, [table], (err, result) => {
      if (err) throw err;
      console.table(results);
    });
  },
  insertOne(table, whatToInsert) {
    const queryString = `INSERT INTO ?? (burger_name) VALUES(?)`;
    connection.query(queryString, [table, whatToInsert], (err, result) => {
      if (err) throw err;
      console.log(`Item inserted!`);
    });
  },
  updateOne(table, newValue, idToUpdate) {
    const queryString = `UPDATE ?? SET burger_name = ? WHERE id = ?`;
    connection.query(
      queryString,
      [table, newValue, idToUpdate],
      (err, result) => {
        if (err) throw err;
        console.log(`Updated!`);
      }
    );
  },
};
