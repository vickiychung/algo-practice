CREATE PROCEDURE projectList()
BEGIN
  SELECT project_name,
    team_lead,
    income
  FROM projects;
END