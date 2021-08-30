CREATE PROCEDURE suspectsInvestigation2()
BEGIN
  SELECT id, name, surname
  FROM suspect
  WHERE NOT (height > 170
    AND name LIKE "B%"
    AND surname LIKE "Gre_n")
  ORDER BY id;
END