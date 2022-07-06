-- Query for total cats in database
SELECT COUNT(*) AS total_cats FROM cats;

-- Query for oldest cat and the year born
SELECT name, MIN(birth_year) FROM cats;

-- Query for youngest cat and the year born
SELECT name, MAX(birth_year) FROM cats;

-- Query for both youngest and oldest in one simple SELECT


-- Write a query to list the number of toys per cat.
SELECT cats.name, COUNT(*) AS toys_owned FROM cats
JOIN toys ON toys.cat_id = cats.id
GROUP BY cats.name;

-- Write a query to determine which cats have been "spoiled" with two or more toys.
SELECT cats.name, COUNT(*) AS toys_owned FROM cats
JOIN toys ON toys.cat_id = cats.id
GROUP BY cats.id
HAVING toys_owned >= 2;
