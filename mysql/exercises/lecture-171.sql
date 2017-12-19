-- What's a good use case for CHAR?
-- state abbreviations (saves space and will always be 2 chars)

-- Create an inventory
CREATE TABLE inventory (
  item_name VARCHAR(200),
  price DECIMAL(8, 2),
  quantity INT
);

-- What's the difference b/w DATETIME and TIMESTAMP?
-- DATETIME uses more memory, can store dates from 1900? to past 2038?
-- TIMESTAMP uses less memory, but can't store dates far in the past or future

-- Print the current time
SELECT CURTIME();

-- PRINT the current date
SELECT CURDATE();

-- Print the number of the current day of the week
SELECT DATE_FORMAT(NOW(), '%w');

-- Print the name of the current day of the week
SELECT DATE_FORMAT(NOW(), '%W');

-- Print current day and time using the format: 'mm/dd/yyyy'
SELECT DATE_FORMAT(NOW(), '%m/%d/%Y');

-- ...using format: 'January 2nd at 3:15'
SELECT DATE_FORMAT(NOW(), '%M %D at %k:%i');

-- Create a tweets table that stores: tweet content, a username, time it was created
CREATE TABLE tweets (
  content VARCHAR(140),
  username VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW()
);
