const connection = require("./connection");

// require(`./connection.js`);

// const printQuestionMarks = (num) => {
//   const arr = [];

//   for (let i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// };

const objToSql = (ob) => {
  const arr = [];
console.log(ob);
  // Loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key}=${value}`);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
};

const orm = {
  selectAll(table, cb) {
    const queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne(table, cols, vals, cb) {
    const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES ('${vals}')`;

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  //update function
  updateOne(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table} SET `;
    queryString += objToSql(objColVals);
    queryString +=` WHERE `;
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  //delete function
  delete(table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
