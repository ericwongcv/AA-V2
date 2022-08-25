from flask import (Flask, render_template)

app = Flask(__name__)


nav = [
  { 'href': 'https://appacademy.io', 'caption': 'App Academy' },
  { 'href': 'https://archive.or', 'caption': 'Internet Archive' },
]


@app.route('/')
def home():
    return render_template("page.html", navigation=nav), \
        render_template('index.html', sitename='My Sample', page="Home", logged_in=False)

@app.route('/about')
def about():
    return render_template('index.html', sitename='My Sample', page="About")
