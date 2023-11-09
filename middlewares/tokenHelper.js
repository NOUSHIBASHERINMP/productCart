const { verifiesToken } = require("../utils/jwtCreator");
const userRepository = require("../repositories/users");
const tokenVerification = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (token && token.includes("Bearer ")) {
    try {
      const actualToken = token.replace("Bearer ", "");
      const verifyToken = await verifiesToken(actualToken);

      let id = verifyToken.id;
      req.id = id;
      next();
    } catch (error) {
      res.status(401).json({ Message: "Token Is Not Valid" });
    }
  } else {
    res.status(401).json({ Message: "Token Is Not Provided" });
  }
};
const checkRoles = async (req, res, next) => {
  const id = req.id;
  const checkRole = await userRepository.checkUserRoles(id);

  const role = checkRole ? checkRole[0].role : undefined;

  if (role == "admin") {
    next();
  } else {
    res.status(401).send("You Are Not Authorized");
  }
};

module.exports = {
  tokenVerification,
  checkRoles,
};
