-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;
DROP TABLE IF EXISTS musicians_instruments;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER NOT NULL,
  FOREIGN KEY (band_id) REFERENCES bands(id)
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);


INSERT INTO bands (name) VALUES ('Linkin Park');
INSERT INTO musicians (first_name, last_name, band_id) VALUES ('Chester', 'Bennington', 1);
INSERT INTO musicians (first_name, last_name, band_id) VALUES ('Mike', 'Shinota', 1);


CREATE TABLE musicians_instruments (
  musician_id INTEGER NOT NULL,
  instrument_id INTEGER NOT NULL,
  FOREIGN KEY (musician_id) REFERENCES musicians(id),
  FOREIGN KEY (instrument_id) REFERENCES instruments(id)
);

INSERT INTO instruments (type) VALUES ('Drum');
INSERT INTO instruments (type) VALUES ('Guitar');

INSERT INTO musicians_instruments (musician_id, instrument_id) VALUES (1, 1);
INSERT INTO musicians_instruments (musician_id, instrument_id) VALUES (2, 2);
INSERT INTO musicians_instruments (musician_id, instrument_id) VALUES (1, 2);
INSERT INTO musicians_instruments (musician_id, instrument_id) VALUES (2, 1);
