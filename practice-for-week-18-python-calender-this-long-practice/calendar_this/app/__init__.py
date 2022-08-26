from app import routes
from flask import Flask
# import os (or below line)
from app.config import Config

app = Flask(__name__)
# app.config.update({'SECRET_KEY': os.environ.get('SECRET_KEY')}) or below line
app.config.from_object(Config)
app.register_blueprint(routes.bp)
