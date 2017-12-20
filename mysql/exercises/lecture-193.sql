-- LOGICAL OPERATORS --

-- Evaluate the following..

SELECT 10 != 10; -- FALSE

SELECT 15 > 14 && 99 - 5 <= 94; -- TRUE

SELECT 1 IN (5,3) || 9 BETWEEN 8 AND 10; -- TRUE

-- Select all books written before 1980 (non inclusive)
SELECT title, author_fname, author_lname FROM books WHERE released_year < 1980;

-- Select all books written by Egers or Chabon
SELECT title, author_fname, author_lname FROM book WHERE author_lname = 'Eggers' || author_lname = 'Chabon';

-- Select all books by Lahari, published after 2000
SELECT title, author_fname, author_lname FROM books WHERE author_lname = 'Lahari' && released_year > 2000

-- Select all books with pages counts between 100 and 200
SELECT title, author_fname, author_lname FROM books WHERE pages BETWEEN 100 AND 200;

-- Select all book swhere author_lname starts with a 'C' or an 'S'
SELECT title, author_fname, author_lname FROM books WHERE author_lname LIKE 'C%' || 'S%';

-- CASE STATEMENT
SELECT title, author_lname,
  CASE
    WHEN title LIKE '%stories%' THEN 'Short Stories'
    WHEN title = 'Just Kids' || title = 'A Heartbreaking Work' THEN 'Memoir'
    ELSE 'Novel'
  END AS TYPE
FROM books;

-- BONUS
SELECT title, author_lname,
  CASE
    WHEN COUNT(title) = 1 THEN '1 book'
    ELSE CONCAT(COUNT(title), ' books')
  END AS COUNT
FROM books GROUP BY author_lname, author_fname;









