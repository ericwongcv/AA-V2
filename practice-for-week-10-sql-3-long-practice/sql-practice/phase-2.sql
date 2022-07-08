-- Using subqueries, find the names of the cats whose owners are either George Beatty or Melynda Abshire
-- Your code here

SELECT DISTINCT cats.name
FROM cats
WHERE id IN (
    SELECT cat_id
    FROM cat_owners
    WHERE owner_id IN (
        SELECT id
        FROM owners
        WHERE (owners.first_name = 'George' AND owners.last_name = 'Beatty') 
        OR (owners.first_name = 'Melynda' AND owners.last_name = 'Abshire')
    )
);
