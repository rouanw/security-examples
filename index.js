const app = require('express')();
const routes = require('./routes');

app.use((req, res, next) => {
  res.locals.user = {
    username: 'ada',
  };
  next();
});

routes(app);

app.listen(3000);
