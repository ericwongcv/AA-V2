--Insert new cat named "Red" born this year
-- Your code here

-- INSERT INTO cats (name, birth_year) VALUES ('Red', 2022);

--Assign ownership of new cat to George Beatty using subqueries
-- Your code here

-- INSERT INTO cat_owners (owner_id, cat_id) VALUES (
--     (SELECT id FROM owners WHERE first_name = 'George' AND last_name = 'Beatty'),
--     (SELECT id FROM cats WHERE name = 'Red')
-- );

--Query to verify INSERTs worked properly
-- Your code here
SELECT cats.name AS cat_name, owners.first_name, owners.last_name
FROM cats
JOIN cat_owners ON cat_owners.cat_id = cats.id
JOIN owners ON owners.id = cat_owners.owner_id
WHERE cats.name = 'Red';
