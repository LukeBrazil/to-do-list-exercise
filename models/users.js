const db = require("./conn");
const bcrypt = require("bcryptjs");

class userModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async addUser() {
    try {
      const response = await db.one(
        `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id;`,
        [this.name, this.email, this.password]
      );
      return response;
    } catch (error) {
      console.log("ERROR: ", error.message);
      return error.message;
    }
  }
  async login() {
    try {
      const response = await db.one(``);
      return response;
    } catch (error) {
      console.log("Error!: ", error.message);
      return error.message;
    }
  }
}

module.exports = userModel;
