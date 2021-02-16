const express = require(`express`);
const exprhdlbs = require(`express-handlebars`);

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(`handlebars`, exprhdlbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
