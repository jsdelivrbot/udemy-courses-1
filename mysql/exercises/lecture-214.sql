-- JOINS EXERCISE

-- Create schema
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100)
);

CREATE TABLE papers (
  title VARCHAR(100),
  grade INT,
  student_id INT,
  FOREIGN KEY(student_id) REFERENCES students(id)
);

-- LEFT JOIN
SELECT first_name, title, grade FROM students
  JOIN papers
    ON students.id = papers.student_id
ORDER BY grade DESC;

-- RIGHT JOIN
SELECT first_name, title, grade FROM papers
  RIGHT JOIN students
    ON students.id = papers.student_id;

-- RIGHT JOIN IFNULL
SELECT first_name,
       IFNULL(title, 'MISSING') AS 'title',
       IFNULL(grade, 0) AS 'grade'
  FROM papers
  RIGHT JOIN students
    ON students.id = papers.student_id;

-- RIGHT JOIN AVG
SELECT first_name,
       IFNULL(AVG(grade), 0) AS 'average'
  FROM papers
  RIGHT JOIN students
    ON students.id = papers.student_id
GROUP BY first_name
ORDER BY grade DESC;

-- PASSING TABLE
SELECT first_name,
       IFNULL(AVG(grade), 0) AS 'average',
       CASE
         WHEN AVG(grade) >= 75 THEN 'PASSING'
         ELSE 'FAILING'
       END AS 'passing_status'
  FROM students
  LEFT JOIN papers
    ON students.id = papers.student_id
GROUP BY first_name
ORDER BY average DESC;







