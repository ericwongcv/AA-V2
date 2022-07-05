-- Tells SQLite to enforce foreign key restrictions
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS bands;
CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE albums (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(100) NOT NULL,
  band_id INTEGER,
  year INTEGER NOT NULL,
  num_sold INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (band_id) REFERENCES bands(id) ON DELETE CASCADE
);

INSERT INTO bands
VALUES (1, 'The Falling Box'),
  (2, 'America The Piano'),
  (3, 'Loved Autumn'),
  (4, 'Playin Sound'),
  (5, 'The King River');

INSERT INTO albums (title, band_id, year, num_sold)
VALUES ('The Falling Box', 1, 2015, 25000),
  ('Again', 1, 2018, 30000),
  ('The End', 1, 2020, 120000),
  ('The Prelude', 2, 2020, 60000),
  ('Bases Loaded', 2, 2021, 75000),
  ('One', 3, 2018, 55000),
  ('Two', 3, 2020, 80000),
  ('Three?', 3, 2021, 17000),
  ('Back To The Middle', 4, 2019, 12000),
  ('Where We Go', 4, 2020, 63000),
  ('The King River', 5, 2017, 85000),
  ('Under Water', 5, 2020, 106000),
  ('Another Fork', 5, 2021, 140000);
  

-- Step 1: SELECT the result of a joined table
    -- Run the SQL command that joins the bands and albums tables together, SELECTing both the name of the band and the album title.
SELECT bands.name, albums.title FROM bands
  JOIN albums ON albums.band_id = bands.id;

-- Step 2: Filter a query across a joined table
    -- Run the SQL command that selects the name of each band that has an album with fewer than 20,000 sales.
SELECT bands.name FROM bands
  JOIN albums ON albums.band_id = bands.id
  WHERE albums.num_sold < 20000;
