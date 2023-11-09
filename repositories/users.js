const pool = require("../config/db");
const userQuery = require("../queries/users");
const { passwordHashing } = require("../utils/password");

exports.registerUser = (name, username, password, phone, role) => {
  return new Promise((resolve, reject) => {
    const hashedPassword = passwordHashing(password);
    pool.query(
      userQuery.signUpUser,
      [name, username, hashedPassword, phone, role],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          const id = results.rows ? results.rows[0].id : undefined;

          resolve(id);
        }
      }
    );
  });
};
exports.checkByUsername = (username) => {
  return new Promise((resolve, reject) => {
    pool.query(userQuery.checkusername, [username], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};
exports.checkUserRoles = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(userQuery.checkRoles, [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};
