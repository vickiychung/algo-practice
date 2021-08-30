CREATE PROCEDURE marketReport()
BEGIN
  SELECT IFNULL(country, 'Total:') AS country,
    COUNT(*) AS competitors
  FROM foreignCompetitors
  GROUP BY country WITH ROLLUP;
END