----------
-- Step 0 - Create a Query 
----------
-- Query: Find a count of `toys` records that have a price greater than
    -- 55 and belong to a cat that has the color "Olive".

    -- Your code here
    -- SELECT COUNT(*) FROM toys
    -- JOIN cat_toys ON cat_toys.toy_id = toys.id
    -- JOIN cats ON cats.id = cat_toys.cat_id
    -- WHERE cats.color = 'Olive' AND toys.price > 55;

-- Paste your results below (as a comment):
    -- 215



----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here
    -- EXPLAIN QUERY PLAN
    -- SELECT COUNT(*) FROM toys
    -- JOIN cat_toys ON cat_toys.toy_id = toys.id
    -- JOIN cats ON cats.id = cat_toys.cat_id
    -- WHERE cats.color = 'Olive' AND toys.price > 55;
    

-- Paste your results below (as a comment):

    -- |--SCAN cat_toys
    -- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
    -- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- What do your results mean?

    -- Was this a SEARCH or SCAN?
        -- Initally SCAN cat_toys, then SEARCH on toys, then SEARCH on cats

    -- What does that mean?




----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

    -- .timer on
    -- SELECT COUNT(*) FROM toys
    -- JOIN cat_toys ON cat_toys.toy_id = toys.id
    -- JOIN cats ON cats.id = cat_toys.cat_id
    -- WHERE cats.color = 'Olive' AND toys.price > 55;

-- Paste your results below (as a comment):

    -- Run Time: real 0.010 user 0.009560 sys 0.000168




----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here
    -- CREATE INDEX idx_cats_color
    -- ON cats(color);
    -- CREATE INDEX idx_cat_toys_cat_id
    -- ON cat_toys(cat_id);

-- Analyze Query:
    -- Your code here
    -- EXPLAIN QUERY PLAN
    -- SELECT COUNT(*) FROM toys
    -- JOIN cat_toys ON cat_toys.toy_id = toys.id
    -- JOIN cats ON cats.id = cat_toys.cat_id
    -- WHERE cats.color = 'Olive' AND toys.price > 55;

-- Paste your results below (as a comment):

    -- |--SEARCH cats USING COVERING INDEX idx_cats_color (color=?)
    -- |--SEARCH cat_toys USING INDEX idx_cat_toys_cat_id (cat_id=?)
    -- `--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)

-- Analyze Results:

    -- Is the new index being applied in this query?
        -- YES, 2 indexes are being used.



----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

    -- .timer on
    -- SELECT COUNT(*) FROM toys
    -- JOIN cat_toys ON cat_toys.toy_id = toys.id
    -- JOIN cats ON cats.id = cat_toys.cat_id
    -- WHERE cats.color = 'Olive' AND toys.price > 55;

-- Paste your results below (as a comment):

    -- Run Time: real 0.000 user 0.000068 sys 0.000007

-- Analyze Results:
    -- Are you still getting the correct query results?
        -- YES, result is still 215.

    -- Did the execution time improve (decrease)?
        -- Greatly improved

    -- Do you see any other opportunities for making this query more efficient?



---------------------------------
-- Notes From Further Exploration
---------------------------------
