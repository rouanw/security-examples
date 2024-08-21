const Joi = require('joi');
const { isLoggedIn, userMatchesRequest } = require('./middleware');
const { getProfile, createProfile, updateProfile } = require('./profile');

function isValidProfile(req, res, next) {
  try {
    const profileSchema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string(),
      dateOfBirth: Joi.date().min('1-1-1920').max('1-1-2000'),
      gender: Joi.string(),
      idealDate: Joi.string(),
      sexualOrientation: Joi.string(),
      favoriteColor: Joi.string(),
      favoriteFood: Joi.string(),
    }).required();
    Joi.assert(req.body, profileSchema);
  } catch (error) {
    return res.sendStatus(400);
  }
  next();
}

module.exports = (app) => {
  app.get('/profile/:username', isLoggedIn, getProfile);
  app.put('/profile/:username', isLoggedIn, isValidProfile, updateProfile);
  app.post('/profile/:username', isLoggedIn, userMatchesRequest, isValidProfile, createProfile);
};
