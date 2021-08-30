CREATE PROCEDURE mostExpensive()
BEGIN
  SELECT name
  FROM products
  ORDER BY (price * quantity) DESC, name ASC
  LIMIT 1;
END