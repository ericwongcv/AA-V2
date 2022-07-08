-- Give "Red" the cat one of every toy the other cats have
-- Your code here

-- INSERT INTO toys (cat_id, name) 
-- SELECT (SELECT id FROM cats WHERE name = 'Red'), name
-- FROM toys;

-- Query spoiled cats reporting the most spoiled first
-- Your code here

SELECT cats.name, COUNT(toys.name) AS total_toys FROM toys
JOIN cats ON cats.id = toys.cat_id
GROUP BY toys.cat_id
HAVING total_toys > 2
ORDER BY total_toys DESC;
