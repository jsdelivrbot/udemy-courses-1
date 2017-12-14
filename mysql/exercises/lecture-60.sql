DROP TABLE employees;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  last_name VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  middle_name VARCHAR(50),
  age INT NOT NULL,
  current_status VARCHAR(50) NOT NULL DEFAULT 'employed'
);

INSERT INTO employees (
  last_name,
  first_name,
  middle_name,
  age
) VALUES (
  'Smalls',
  'Biggie',
  'Nototious',
  27
);

SELECT * FROM employees;
