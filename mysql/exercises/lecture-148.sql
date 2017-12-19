-- Print the number of books in the database
SELECT COUNT(*) FROM books;

-- Print how many books were released in each year
SELECT released_year, COUNT(*) FROM books GROUP BY released_year;

-- Print total number of books in stock
SELECT SUM(stock_quantity) FROM books;

-- Print each author's avg released_year
SELECT AVG(released_year), author_lname FROM books GROUP BY author_lname, author_fname;

-- Print full name of the author who wrote the longest book
SELECT CONCAT(author_fname, ' ', author_lname) AS 'Full name' FROM books ORDER BY pages DESC LIMIT 1;

-- Print # books and avg pages of all books for each released_year
SELECT released_year AS year,
    COUNT(released_year) AS '# of books',
    AVG(pages) AS 'avg pages'
FROM books
    GROUP BY released_year ASC;
