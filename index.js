const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.locals.user = {
    username: 'ada',
  };
  next();
});

routes(app);

app.listen(3000);

module.exports = app;
