const Joi = require('joi');
const { getProfile, createProfile } = require('./profile');

function isLoggedIn(req, res, next) {
  if (res.locals.user) {
    return next();
  }
  return res.sendStatus(401);
}

function userMatchesRequest(req, res, next) {
  if (req.params.username === res.locals.user?.username) {
    return next();
  }
  return res.sendStatus(403);
}

function isValidProfile(req, res, next) {
  try {
    const profileSchema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string(),
      dateOfBirth: Joi.date().min('1-1-1920').max('1-1-2000'),
      gender: Joi.string(),
    });
    Joi.assert(req.body.profile, profileSchema);
  } catch (error) {
    return res.sendStatus(400);
  }
  next();
}

module.exports = (app) => {
  app.get('/profile/:username', isLoggedIn, getProfile);
  app.post('/profile/:username', isLoggedIn, userMatchesRequest, isValidProfile, createProfile);
};
