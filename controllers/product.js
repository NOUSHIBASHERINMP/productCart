const asyncHandler = require("../middlewares/asyncHandler");
const productRepository = require("../repositories/product");
const ErrorResponse = require("../utils/errorResponse");

exports.getAllProducts = asyncHandler(async (req, res, next) => {
  const allProducts = await productRepository.getAllProducts();
  res.status(200).send(allProducts);
});
exports.getSingleProductById = asyncHandler(async (req, res, next) => {
  const product_id = req.params.id;
  const checkId = await productRepository.checkWhetherIdExists(product_id);
  if (checkId) {
    const singleProductById = await productRepository.getSingleProductById(
      product_id
    );
    res.status(200).send(singleProductById);
  } else {
    next(new ErrorResponse(`Product Does Not Exist In ID ${product_id} `, 404));
  }
});
exports.createProductDetails = asyncHandler(async (req, res, next) => {
  const { title, image, price, offer_price } = req.body;
  await productRepository.createProductDetails(
    title,
    image,
    price,
    offer_price
  );
  res
    .status(201)
    .json({ Message: "You Have Successfully addded New Product Details" });
});
exports.updateProductDetails = asyncHandler(async (req, res, next) => {
  const { title, image, price, offer_price } = req.body;
  const product_id = req.params.id;
  const ifExistPro_id = await productRepository.getSingleProductById(
    product_id
  );

  if (ifExistPro_id && ifExistPro_id.length > 0) {
    await productRepository.updateProductDetails(
      title,
      image,
      price,
      offer_price,
      product_id
    );
    res.status(200).json({ Message: "You Have Successfully Updated Data" });
  } else {
    next(new ErrorResponse(`Data Does Not Exist In the Id ${product_id}`, 404));
  }
});
exports.removeProductDetails = asyncHandler(async (req, res, next) => {
  const product_id = req.params.id;
  const idChecking = await productRepository.getSingleProductById(product_id);
  if (idChecking && idChecking.length > 0) {
    const dataWantsToRemove = await productRepository.removeProductDetails(
      product_id
    );
    res.status(200).json({ Message: "You Have Deleted Data Successfully" });
  } else {
    next(new ErrorResponse(`Data Does Not Exist In The Id ${product_id}`));
  }
});
