-- Find Hermione's cats
-- Your code here
SELECT cats.name FROM cats
    JOIN cat_owners ON cat_owners.cat_id = cats.id
    JOIN owners ON owners.id = cat_owners.owner_id
    WHERE owners.first_name = 'Hermione';

-- Find All the Toys for Hermione's cats
-- Your code here
-- SELECT toys.name FROM toys
--     JOIN cats ON cats.id = toys.cat_id
--     JOIN cat_owners ON cat_owners.cat_id = cats.id
--     JOIN owners ON owners.id = cat_owners.owner_id
--     WHERE owners.first_name = 'Hermione';

SELECT toys.name FROM toys
    JOIN cat_owners ON cat_owners.cat_id = toys.cat_id
    JOIN owners ON owners.id = cat_owners.owner_id
    WHERE owners.first_name = 'Hermione';
