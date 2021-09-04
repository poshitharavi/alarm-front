class Auth {
  constructor() {
    this.authenticate = false;
  }

  login(cb) {
    this.authenticate = true;
    cb();
  }

  logout(cb) {
    this.authenticate = false;
    cb();
  }

  isAuthenticated() {
    if (JSON.parse(sessionStorage.getItem("AuthData"))) {
      this.authenticate = true;
    } else {
      this.authenticate = false;
    }
    return this.authenticate;
  }
}
export default new Auth();
