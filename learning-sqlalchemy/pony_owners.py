from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column, ForeignKey, Table
from sqlalchemy.types import Integer, String
from sqlalchemy.orm import relationship, sessionmaker


Base = declarative_base()

# CREATE TABLE pony_handlers (
#   pony_id INTEGER NOT NULL,
#   handler_id INTEGER NOT NULL,
#   PRIMARY KEY (pony_id, handler_id),
#   FOREIGN KEY (pony_id) REFERENCES ponies(id),
#   FOREIGN KEY (handler_id) REFERENCES handlers(id)
# );
pony_handlers = Table(
    "pony_handlers",
    Base.metadata,
    Column("pony_id", ForeignKey("ponies.id"), primary_key=True),
    Column("handler_id", ForeignKey("handlers.id"), primary_key=True))

# CREATE TABLE owners (
#   id SERIAL PRIMARY KEY,
#   first_name VARCHAR(255) NOT NULL,
#   last_name VARCHAR(255) NOT NULL,
#   email VARCHAR(255) NOT NULL
# );
class Owner(Base):
    __tablename__='owners'

    id = Column(Integer, primary_key=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    email = Column(String(255))

    ponies = relationship("Pony", back_populates="owner", cascade="all, delete-orphan")

# CREATE TABLE ponies (
#   id SERIAL PRIMARY KEY,
#   name VARCHAR(255) NOT NULL,
#   birth_year INTEGER NOT NULL,
#   breed VARCHAR(255),
#   owner_id INTEGER NOT NULL,
#   FOREIGN KEY (owner_id) REFERENCES owners(id)
# );
class Pony(Base):
    __tablename__='ponies'

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    birth_year = Column(Integer)
    breed = Column(String(255))
    owner_id = Column(Integer, ForeignKey("owners.id"))

    owner = relationship("Owner", back_populates="ponies")
    handlers = relationship("Handler",
                            secondary=pony_handlers,
                            back_populates="ponies")

class Handler(Base):
    __tablename__ = "handlers"

    id = Column(Integer, primary_key=True)
    first_name = Column(String(50))
    last_name = Column(String(50))
    employee_id = Column(String(12))

    ponies = relationship("Pony",
                          secondary=pony_handlers,
                          back_populates="handlers")


# EXAMPLE FOR RELATIONSHIP
# # Create an owner
# owner = Owner(first_name="Lord",
#               last_name="Dogknife",
#               email="doggy@poodles.net")

# # Create a pony
# pony = Pony(name="Walking Walker",
#             birth_year=3023,
#             breed="Cyborg")

# # Set the pony's owner
# pony.owner = owner

# # MAGIC: SQLAlchemy adds it to the ponies list!
# print(owner.ponies)
# # Prints [<Pony ...>]


db_url = "postgresql://sqlalchemy_test:password@localhost/sqlalchemy_test"
engine = create_engine(db_url)

SessionFactory = sessionmaker(bind=engine)

session = SessionFactory()

with engine.connect() as connection:
    result = connection.execute("""
        SELECT o.first_name, o.last_name, p.name
        FROM owners o
        JOIN ponies p ON (o.id = p.owner_id)
    """)
    for row in result:
        print(row["first_name"], row["last_name"], "owns", row["name"])


session.close()
engine.dispose()


# from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker

# db_url = "postgresql://sqlalchemy_test:password@localhost/sqlalchemy_test"
# engine = create_engine(db_url)

# SessionFactory = sessionmaker(bind=engine)

# session = SessionFactory()

# # Do stuff with the session

# engine.dispose()
