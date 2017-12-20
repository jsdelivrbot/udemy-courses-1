-- -- lecture 223
-- SELECT title, rating
--   FROM series
--   JOIN reviews
--  ON series.id = reviews.series_id;

-- -- lecture 225
-- SELECT
--  title,
--  AVG(rating) AS avg_rating
-- FROM series
-- JOIN reviews
--  ON series.id = reviews.series_id
-- GROUP BY series.id
-- ORDER BY avg_rating;

-- -- lecture 227
-- SELECT
--  first_name,
--  last_name,
--  rating
-- FROM reviewers
--  JOIN reviews
--  ON reviewers.id = reviews.reviewer_id;

-- -- lecture 229
-- SELECT
--  title as unreviewed_series,
-- FROM series
-- LEFT JOIN reviews
--  ON series.id = reviews.series_id
-- WHERE rating IS NULL;

-- -- lecture 231
-- SELECT
--  genre,
--  Round(AVG(rating), 2) AS 'avg_rating'
-- FROM series
-- JOIN reviews
--  ON series.id = reviews.series_id
-- GROUP BY genre;

-- -- lecture 233
-- SELECT
--     first_name,
--     last_name,
--     COUNT(rating) AS 'COUNT',
--     IFNULL(MIN(rating), 0) AS 'MIN',
--     IFNULL(MAX(rating), 0) AS 'MAX',
--     IFNULL(AVG(rating), 0) AS 'AVG',
--     CASE
--         WHEN COUNT(rating) = 0 THEN 'INACTIVE'
--         WHEN COUNT(rating) >= 10 THEN 'POWER USER'
--         ELSE 'ACTIVE'
--     END AS 'STATUS'
-- FROM reviewers
-- LEFT JOIN reviews
--     ON reviewers.id = reviews.reviewer_id
-- GROUP BY reviewers.id

-- lecture 235
SELECT
    title,
    rating,
    CONCAT(first_name, ' ', last_name) AS 'reviewer'
FROM reviewers
INNER JOIN reviews
    ON reviewers.id = reviews.reviewer_id
INNER JOIN series
    ON series.id = reviews.series_id
ORDER BY title, rating DESC;


















