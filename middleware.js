function isLoggedIn(req, res, next) {
  if (req.cookies.user) {
    return next();
  }
  return res.sendStatus(401);
}

function userMatchesRequest(req, res, next) {
  if (req.params.username === req.cookies.user) {
    return next();
  }
  return res.sendStatus(403);
}

module.exports = { isLoggedIn, userMatchesRequest };
