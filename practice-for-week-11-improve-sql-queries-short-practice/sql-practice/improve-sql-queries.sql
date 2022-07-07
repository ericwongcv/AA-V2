----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

    -- Your code here

-- SELECT * FROM cats 
-- JOIN cat_toys ON cat_toys.cat_id = cats.id
-- JOIN toys ON toys.id = cat_toys.toy_id
-- WHERE toys.id = 5;

-- Paste your results below (as a comment):

    -- id|name|color|breed|id|cat_id|toy_id|id|name|color|price
    -- 4002|Rachele|Maroon|Foldex Cat|4509|4002|5|5|Shiny Mouse|Blue|7
    -- 31|Rodger|Lavender|Oregon Rex|10008|31|5|5|Shiny Mouse|Blue|7
    -- 77|Jamal|Orange|Sam Sawet|10051|77|5|5|Shiny Mouse|Blue|7



----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here

-- EXPLAIN QUERY PLAN
-- SELECT * FROM cats 
-- JOIN cat_toys ON cat_toys.cat_id = cats.id
-- JOIN toys ON toys.id = cat_toys.toy_id
-- WHERE toys.id = 5;

-- Paste your results below (as a comment):

    -- QUERY PLAN
    -- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
    -- |--SCAN cat_toys
    -- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)


-- What do your results mean?

    -- Was this a SEARCH or SCAN?
        -- This was a SEARCH on toys and cats tables where rowid was used.
        -- however, SCAN was done for cat_toys.

    -- What does that mean?
        -- The query did not go through every record on the database for toys and cats, 
        -- and instead went through a a subset of records. But for cat_toys,
        -- it SCAN-ned through the table to find a match.
        -- First it SEARCHED cats for row 5, then SCAN cat_toys for cat ids corresponding
        -- toys with id = 5. Then SEARCHED all cats with the cat ids.



----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here
        -- .timer on
        -- SELECT * FROM cats 
        -- JOIN cat_toys ON cat_toys.cat_id = cats.id
        -- JOIN toys ON toys.id = cat_toys.toy_id
        -- WHERE toys.id = 5;

-- Paste your results below (as a comment):

    -- Run Time: real 0.001 user 0.001051 sys 0.000150




----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here
        -- CREATE INDEX 
        --     idx_cats_toys_toy_id_cat_id
        --     ON cat_toys(toy_id, cat_id);

-- Analyze Query:
    -- Your code here
        -- EXPLAIN QUERY PLAN 
        -- SELECT * FROM cats 
        -- JOIN cat_toys ON cat_toys.cat_id = cats.id
        -- JOIN toys ON toys.id = cat_toys.toy_id
        -- WHERE toys.id = 5;

-- Paste your results below (as a comment):
    -- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
    -- |--SEARCH cat_toys USING COVERING INDEX idx_cats_toys_toy_id_cat_id (toy_id=?)
    -- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- Analyze Results:

    -- Is the new index being applied in this query?
        -- Yes, indexing is for cat_toys on reverse where toy_id is indexed to match cat_id.
        -- SEARCH is applied through 3 steps, toys => cat_toys => cats.


----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here

        -- .timer on
        -- SELECT * FROM cats 
        -- JOIN cat_toys ON cat_toys.cat_id = cats.id
        -- JOIN toys ON toys.id = cat_toys.toy_id
        -- WHERE toys.id = 5;

-- Paste your results below (as a comment):

    -- Run Time: real 0.001 user 0.000145 sys 0.000127

-- Analyze Results:
    -- Are you still getting the correct query results?
        -- YES

    -- Did the execution time improve (decrease)?
        -- YES, execution time decreased to almost 1/10th of original time.

    -- Do you see any other opportunities for making this query more efficient?


---------------------------------
-- Notes From Further Exploration
---------------------------------
