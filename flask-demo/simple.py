# from flask import Flask

# app = Flask(__name__)

# @app.route('/')
# def hello():
#     return '<h1>Hello, world!</h1>'

from flask import Flask
from config import Config

app = Flask(__name__)

# Set configuration variable
# app.config["greeting"] = 'Hey there, humans!'

# Apply configuration from class
app.config.from_object(Config)

# Test value of variable that may or may not come from the environment
print("SECRET KEY IS: ", app.config["SECRET_KEY"])



@app.route('/')
def hello():
    # Use configuration variable
    return f'<h1>{app.config["GREETING"]}</h1>'
