DROP TABLE IF EXISTS owners;
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS cat_owners;
DROP TABLE IF EXISTS toys;

CREATE TABLE owners (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT
);

CREATE TABLE cats (
    id INTEGER PRIMARY KEY,
    name TEXT,
    birth_year INTEGER
);

CREATE TABLE cat_owners (
    cat_id INTEGER,
    owner_id INTEGER,
    FOREIGN KEY (cat_id) REFERENCES cats(id),
    FOREIGN KEY (owner_id) REFERENCES owners(id)
);

CREATE TABLE toys (
    id INTEGER PRIMARY KEY,
    name TEXT,
    cat_id INTEGER,
    FOREIGN KEY (cat_id) REFERENCES cats(id)
);
