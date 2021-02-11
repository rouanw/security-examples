const app = require('express')();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
  next();
});

routes(app);

app.listen(3000);

module.exports = app;
