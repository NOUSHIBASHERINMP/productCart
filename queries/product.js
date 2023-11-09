exports.getAllProducts =
  "SELECT product_id,title,image,price,offer_price FROM product_list";
exports.getSingleProductById =
  "SELECT product_id,title,image,price,offer_price FROM product_list WHERE product_id = $1";
exports.createProductDetails =
  "INSERT INTO product_list (title,image,price,offer_price) VALUES ($1,$2,$3,$4)";
exports.updateProductDetails =
  "UPDATE product_list SET title = $1, image = $2 , price = $3 , offer_price = $4 WHERE product_id = $5";
exports.removeProductDetails = "DELETE FROM product_list WHERE product_id = $1";
