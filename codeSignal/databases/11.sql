CREATE PROCEDURE suspectsInvestigation()
BEGIN
  SELECT id, name, surname
  FROM suspect
  WHERE height <= 170
    AND name LIKE "B%"
    AND surname LIKE "Gre_n"
  ORDER BY id;
END