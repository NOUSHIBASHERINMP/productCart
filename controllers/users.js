const userRepository = require("../repositories/users");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/asyncHandler");
const { jwtCreator } = require("../utils/jwtCreator");
const { passwordDecode } = require("../utils/password");

exports.addUser = asyncHandler(async (req, res, next) => {
  const { name, username, password, phone, role } = req.body;
  const checkUserExist = await userRepository.checkByUsername(username);

  if (checkUserExist && checkUserExist.length > 0) {
    return next(new ErrorResponse(`User Already Exists`, 400));
  }

  const id = await userRepository.registerUser(
    name,
    username,
    password,
    phone,
    role
  );

  if (id) {
    const token = jwtCreator(id);

    res
      .status(201)
      .json({
        Message: "Congratulation!!You Have Successfully Added As User",
        data: { name: name },
        token: token,
      });
  }
});

exports.loginUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  const loginDetails = await userRepository.checkByUsername(username);

  if (!loginDetails || loginDetails.length == 0) {
    return next(new ErrorResponse(`Invalid Credentials`, 400));
  }
  const login = loginDetails[0];
  const correctPassword = passwordDecode(password, login.password);

  if (correctPassword) {
    const token = jwtCreator(login.id);
    res
      .status(200)
      .json({
        Message: "You Have Successfully Logged In",
        data: { name: username },
        token: token,
      });
  }
  return next(new ErrorResponse(`Invalid Credentials`, 400));
});
