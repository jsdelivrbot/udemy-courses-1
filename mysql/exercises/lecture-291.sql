-- Find earliest date a user joined
SELECT
    DATE_FORMAT(created_at, '%M %D %Y' ) AS earliest_date
FROM users
ORDER BY created_at ASC
LIMIT 1;

-- Find email of the first user
SELECT
    email,
    created_at
FROM users
ORDER BY created_at ASC
LIMIT 1;

-- Users according to the month they joined
SELECT
    DATE_FORMAT(created_at, '%M') AS month,
    COUNT(*) AS count
FROM users
GROUP BY month
ORDER BY count DESC;

-- Count number of users with yahoo emails
SELECT
    COUNT(*) AS yahoo_users
FROM users
WHERE email
    LIKE '%yahoo.com';

-- Calculate total number of users for each email host
SELECT
    CASE
        WHEN email LIKE '%gmail.com' THEN 'gmail'
        WHEN email LIKE '%yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END AS provider,
    COUNT(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;