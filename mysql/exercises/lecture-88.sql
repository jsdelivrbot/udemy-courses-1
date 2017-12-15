-- Create table 'shirts'
CREATE TABLE shirts (
  shirt_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  article VARCHAR(100),
  color VARCHAR(100),
  shirt_size VARCHAR(10),
  last_worn INT
);


SELECT * FROM shirts;

-- Seed database
INSERT INTO shirts (
  article,
  color,
  shirt_size,
  last_worn
) VALUES
  ('t-shirt', 'white', 'S', 10),
  ('t-shirt', 'green', 'S', 200),
  ('polo shirt', 'black', 'M', 10),
  ('tank top', 'blue', 'S', 50),
  ('t-shirt', 'pink', 'S', 0),
  ('polo shirt', 'red', 'M', 5),
  ('tank top', 'white', 'S', 200),
  ('tank top', 'blue', 'M', 15);

SELECT * FROM shirts;

-- Insert one purple shirt
INSERT INTO shirts (
  article,
  color,
  shirt_size,
  last_worn
) VALUES ('polo shirt', 'purple', 'M', 50);

-- Select all shirts, print article and color
SELECT article, color FROM shirts;
SELECT * FROM shirts;

-- Select all medium shirts, print everything but id
SELECT article, color, shirt_size, last_worn FROM shirts WHERE shirt_size = 'M';
SELECT * FROM shirts;

-- Update all polo shirts - change their size to large
UPDATE shirts SET shirt_size = 'L' WHERE article = 'polo shirt';
SELECT * FROM shirts;

-- Update the shirt last worn 15 days ago - change last_worn to 0
UPDATE shirts SET last_worn = 0 WHERE last_worn = 15;
SELECT * FROM shirts;

-- Update all white shirts - change size to 'XS' and color to 'off white'
UPDATE shirts SET shirt_size = 'XS', color = 'off white' WHERE color = 'white';
SELECT * FROM shirts;

-- Delet all old shirts - last worn 200 days ago
DELETE FROM shirts WHERE last_worn = 200;
SELECT * FROM shirts;

-- Delete all tank tops
DELETE FROM shirts WHERE article = 'tank top';
SELECT * FROM shirts;

-- Delete all shirts
DELETE FROM shirts;
SELECT * FROM shirts;

-- Drop shirts table
DROP TABLE shirts;
















