const express = require(`express`);
const exprhdlbs = require(`express-handlebars`);

const app = express();

const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(`handlebars`, exprhdlbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controllers");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
