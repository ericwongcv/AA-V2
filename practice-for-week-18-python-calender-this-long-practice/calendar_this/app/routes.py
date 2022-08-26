from flask import Blueprint, render_template, redirect, url_for
import os
import psycopg2

from app.forms import AppointmentFrom

# Put this import at the top of app.route
from datetime import datetime, timedelta

bp = Blueprint('main', __name__, url_prefix='/')

CONNECTION_PARAMETERS = {
    "user": os.environ.get("DB_USER"),
    "password": os.environ.get("DB_PASS"),
    "dbname": os.environ.get("DB_NAME"),
    "host": os.environ.get("DB_HOST"),
}

@bp.route("/", methods=["GET", "POST"])
def main():
    d = datetime.now()
    return redirect(url_for(".daily", year=d.year, month=d.month, day=d.day))
    

@bp.route("/<int:year>/<int:month>/<int:day>", methods=["GET", "POST"])
def daily(year: int, month: int, day: int):
    form = AppointmentFrom()
    
    if form.validate_on_submit():
        # Use this code snippet in running your INSERT statement
        # You must have named the attributes on your AppointmentForm
        # class what was recommended in the table for this to work.
        params = {
            'name': form.name.data,
            'start_datetime': datetime.combine(form.start_date.data, form.start_time.data),
            'end_datetime': datetime.combine(form.end_date.data, form.end_time.data),
            'description': form.description.data,
            'private': form.private.data
        }
        # Create a psycopg2 connection with the connection parameters
            # Create a cursor from the connection
                # Execute a parameterized INSERT statement with the
                #   params dictionary from above
                # Redirect to "/"
        with psycopg2.connect(**CONNECTION_PARAMETERS) as conn:
            with conn.cursor() as curs:
                curs.execute("""
                            INSERT INTO appointments (name, start_datetime, end_datetime, description, private)
                            VALUES (%s, %s, %s, %s, %s);
                           """,
                           (params["name"], params["start_datetime"], params["end_datetime"], params["description"], params["private"]))
                return redirect('/')

    day = datetime(year, month, day)
    next_day = timedelta(days=1) + day
    
    # Create a psycopg2 connection with the connection parameters
        # Create a cursor from the connection
            # Execute "SELECT id, name, start_datetime, end_datetime
            #          FROM appointments
            #          ORDER BY start_datetime;"
            # Fetch all of the records
    with psycopg2.connect(**CONNECTION_PARAMETERS) as conn:
        with conn.cursor() as curs:
            curs.execute(f"""
                        SELECT id, name, start_datetime, end_datetime
                        FROM appointments
                        WHERE start_datetime BETWEEN '{day}' AND '{next_day}'
                        ORDER BY start_datetime;
                       """)
            rows = curs.fetchall()
            return render_template("main.html", rows=rows, form=form)
