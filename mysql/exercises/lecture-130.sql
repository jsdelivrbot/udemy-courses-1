-- Select title with 'stories'
SELECT title FROM books WHERE title LIKE '%stories%';

-- Select longest book
SELECT title, pages FROM books ORDER BY pages DESC LIMIT 1;

-- Print a summary containing the title and year for the threee most recent books
SELECT CONCAT(title, ' - ', released_year) AS "summary" FROM books ORDER BY released_year DESC LIMIT 3;

-- Find all books with an author_lname that contains a space(" ")
SELECT title, author_lname FROM books WHERE author_lname LIKE '% %';

-- Find the 3 books with the lowest stock. Select title, year, and stock
SELECT title, released_year, stock_quantity FROM books ORDER BY stock_quantity ASC LIMIT 3;

-- Print title and author_lname, sorted first by author_lname and then by title
SELECT title, author_lname FROM books ORDER BY author_lname, title;

-- YELL fav author sorted by lname
SELECT CONCAT('MY FAVORITE AUTHOR IS ', UPPER(author_fname), ' ', UPPER(author_lname), '!') AS "yell" FROM books ORDER BY author_lname;
