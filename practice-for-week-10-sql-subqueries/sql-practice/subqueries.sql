-- Write a JOIN query to get the list of toys belonging to Garfield.
SELECT toys.name AS toy_name, cats.name AS cat_name FROM toys
JOIN cats ON cats.id = toys.cat_id
WHERE cats.name = 'Garfield';

-- Rewrite the JOIN query using a subquery instead.
SELECT name FROM toys
WHERE toys.cat_id IN (
    SELECT id FROM cats
    WHERE name = 'Garfield'
);

-- Give Garfield a new toy named "Pepperoni" using a subquery for Garfield's id.
-- INSERT INTO toys
-- VALUES ( 
--     ?, 'Pepperoni',
--     (SELECT id 
--     FROM cats
--     WHERE name = 'Garfield'
--     )
-- );

-- Give all cats born before the year 2013 a new toy named "Cat Bed" using a subquery.
-- INSERT INTO toys (name, cat_id)
-- SELECT 'Cat Bed', id
-- FROM cats
-- WHERE birth_year < 2013;

-- Backup the cats table in a table called cats_backup using a subquery. 
-- INSERT INTO cats_backup
-- SELECT * FROM cats;

-- Backup the toys table in a table called toys_backup using a subquery
INSERT INTO toys_backup
SELECT * FROM toys;
