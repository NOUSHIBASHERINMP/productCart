const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const passwordHashing = (password) => {
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};
const passwordDecode = (plainpassword, hashedpassword) => {
  var correctPassword = bcrypt.compareSync(plainpassword, hashedpassword);
  return correctPassword;
};
module.exports = {
  passwordHashing,
  passwordDecode,
};
