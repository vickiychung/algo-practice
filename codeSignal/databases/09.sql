CREATE PROCEDURE gradeDistribution()
BEGIN
  SELECT name, id
  FROM grades
  WHERE final > (midterm1 * 0.25 + midterm2 * 0.25 + final * 0.5)
    AND final > (midterm1 * 0.5 + midterm2 * 0.5)
  ORDER BY left(name, 3), id;
END