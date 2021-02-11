const database = require('./database');

module.exports = {
  async getProfile({ params }, res) {
    const { username } = params;
    const profile = await database.getProfileByUsername(username);
    res.json(profile);
  },
  async createProfile({ body: profile }, res) {
    await database.create(profile);
    res.sendStatus(201);
  },
};
