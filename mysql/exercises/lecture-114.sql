-- Reverse and uppercase the sentence:
-- "Why does my cat look at me with such hatred?"

SELECT UPPER(REVERSE('Why does my cat look at me with such hatred?'));

-- What does this print out?
SELECT
  REPLACE
  (
    CONCAT('I', ' ', 'like', ' ', 'cats'),
    ' ',
    '-'
  );

-- "I-like-cats"

-- Replace spaces in title with '->'
SELECT REPLACE(title, ' ', '->') AS title FROM books;

-- Print lname (regularly), fname (reversed)
SELECT author_lname AS forwards, REVERSE(author_fname) AS backwards FROM books;

-- Print full author name

SELECT CONCAT
  (
    UPPER(author_fname),
    ' ',
    UPPER(author_lname)
  ) AS 'full name in caps'
  FROM books;

-- Print `${title} was released in ${year}`
SELECT CONCAT(title, ' was released in ', released_year) AS blurb FROM books;

-- Print book title and the length of each title
SELECT title, CHAR_LENGTH(title) AS character_count FROM books;

-- Print title author quantity
SELECT CONCAT(SUBSTRING(title, 1, 10), '...') AS "short title",
       CONCAT(author_lname, ',', author_fname) AS "author",
       CONCAT(stock_quantity, ' in ', 'stock') AS "quantity"
FROM books;






