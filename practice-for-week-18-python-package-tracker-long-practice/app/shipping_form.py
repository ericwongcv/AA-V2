from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, BooleanField, SubmitField
from wtforms.validators import DataRequired
from map.map import map

class ShippingForm(FlaskForm):
    sender_name = StringField("Sender name", validators=[DataRequired()])
    recipient_name = StringField("Recipient name", validators=[DataRequired()])
    origin = SelectField("Origin", choices=list(map.keys()), validators=[DataRequired()])
    destination = SelectField("Destination", choices=list(map.keys()), validators=[DataRequired()])
    express = BooleanField("Express shipping")
    submit = SubmitField("Submit")
