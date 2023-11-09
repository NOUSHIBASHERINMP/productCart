const productQuery = require("../queries/product");
const pool = require("../config/db");

exports.getAllProducts = () => {
  return new Promise((resolve, reject) => {
    pool.query(productQuery.getAllProducts, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  });
};
exports.getSingleProductById = (product_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      productQuery.getSingleProductById,
      [product_id],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
};
exports.checkWhetherIdExists = (product_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      productQuery.getSingleProductById,
      [product_id],
      (error, result) => {
        if (error) {
          resolve(false);
        } else {
          resolve(result.rows.length > 0);
        }
      }
    );
  });
};
exports.createProductDetails = (title, image, price, offer_price) => {
  return new Promise((resolve, reject) => {
    pool.query(
      productQuery.createProductDetails,
      [title, image, price, offer_price],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
};
exports.updateProductDetails = (
  title,
  image,
  price,
  offer_price,
  product_id
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      productQuery.updateProductDetails,
      [title, image, price, offer_price, product_id],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
};
exports.removeProductDetails = (product_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      productQuery.removeProductDetails,
      [product_id],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      }
    );
  });
};
