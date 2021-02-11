module.exports = {
  getProfileByUsername() {
    return new Promise((resolve) => resolve({ firstName: 'Ada', lastName: 'Lovelace' }));
  },
  create() {
    return new Promise((resolve) => resolve());
  },
  update(username, profile) {
    return new Promise((resolve) => resolve(profile));
  },
};
