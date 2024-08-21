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
  async updateProfile({ params, body: profile }, res) {
    const { username } = params;
    const updated = await database.update(username, profile);
    res.json(updated);
  },
};
