CREATE PROCEDURE monthlyScholarships()
BEGIN
  SELECT id,
    (scholarship / 12) AS scholarship
  FROM scholarships;
END