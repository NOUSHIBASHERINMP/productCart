exports.signUpUser =
  "INSERT INTO product_page_user (name,username,password,phone,role) VALUES ($1,$2,$3,$4,$5) RETURNING id";
exports.checkusername =
  "SELECT id,name,username,password,phone,role FROM product_page_user WHERE username =$1 ";
exports.checkRoles = "SELECT role FROM product_page_user WHERE id =$1 ";
