module.exports = {
  getProfileByUsername() {
    return new Promise((resolve) => resolve({ firstName: 'Ada', lastName: 'Lovelace' }));
  },
  create() {
    return new Promise((resolve) => resolve());
  },
  update(username) {
    return new Promise((resolve) => resolve({ firstName: 'Ada', lastName: 'Lovelace' }));
  },
};
