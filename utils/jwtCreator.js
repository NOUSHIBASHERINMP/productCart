const jwt = require("jsonwebtoken");
const SECRET = "n%*_541jhuygfwytf";

const jwtCreator = (id) => {
  var token = jwt.sign({ id: id }, SECRET);
  return token;
};
const verifiesToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return reject({ valid: false, error: err });
      }
      resolve({ valid: true, id: decoded.id });
    });
  });
};
module.exports = {
  jwtCreator,
  verifiesToken,
};
