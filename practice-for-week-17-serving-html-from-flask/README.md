Serving HTML From Flask
Serving HTML Forms from Flask
Login, data entry, and searching are all uses for forms in websites. Flask and Jinja can be easily extended to incorporate HTML forms.

When you finish this lesson, you should be able to:

Start a project with Flask, Jinja and Flask-WTF
Use StringField and SubmitField from WTForms
Find the documentation for and apply your working knowledge to be able to use the following basic fields in WTForms
BooleanField
DateField
DateTimeField
DecimalField
FileField
MultipleFileField
FloatField
IntegerField
PasswordField
RadioField
SelectField
SelectMultipleField
SubmitField
StringField
TextAreaField
Flask and WTForms
Quote from Miguel Grinberg

Extensions are a very important part of the Flask ecosystem, as they provide solutions to problems that Flask is intentionally not opinionated about.

Extensions is just another name for third-party packages like Flask and Jinja that you've already installed.

Flask-WTF is a thin wrapper around the very popular WTForms package which is helpful for quickly creating HTML Forms in Python.

In a moment you will make a class for the form. But first, there is an important configuration detail to address.

Config
Specifically, WT Forms uses a SECRET_KEY to prevent Cross-Site Request Forgery (or CSRF, pronounced "sea surf"). This key should be known to this application only and not available to untrusted people or programs. A number of Flask plug-ins also use the SECRET_KEY when it is stored in app.config.

Setup
You first saw how to set a SECRET_KEY in the reading "Introduction to Flask". It is important to understand, so you can practice setting it up again now.

Additionally, the form will require some HTML, so you'll want a Jinja template.

In fact, starting a new project will give you the chance to practice the full Flask setup again. Since you know you will create multiple classes, you can choose to create more folders to improve the organization.

Begin by creating a new project folder. In that folder create a subfolder named app, a subfolder of app named templates and create four files.

Flask environment file in the project folder: .flaskenv
Application file in the app subfolder: __init__.py
Configuration module in the app subfolder: config.py
Jinja template in the app/templates subfolder: form.html
Fill each one with content you learned about in the previous lessons.

.flaskenv
Setting FLASK_APP to point to the app folder

FLASK_APP=app
FLASK_ENV=development
SECRET_KEY=super-secret-stuff
app/config.py
With SECRET_KEY pulling from environment, if defined; otherwise, falling back to hard-coded value.

import os


class Config(object):
    # Property used by multiple Flask add-ons for security
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'default-key-for-devs'
app/init.py
Initializing the Flask application with configuration and setting two routes

Index page at /
Form page at /form
It is ok to use a hard-coded index page for now. If you'd like you can convert it to a template some time in the future. Since it would be nice to have a link to the form, you can include the HTML to set an anchor tag (<a href...) in the index page content.

from flask import (Flask, render_template)
# import config class
from app.config import Config

app = Flask(__name__)
# populate Flask config dictionary from config class
app.config.from_object(Config)


@app.route('/')
def index():
    # keep sample simple with just a link to the form
    return '<h1>Simple App</h1><a href="/form">Form</a>'


@app.route('/form')
def form():
    # load form from Jinja template
    return render_template('form.html')
app/templates/form.html
Basic HTML structure where the form can be added in a few minutes.

<!doctype html>
<html>

<head>
    <title>Sample Form</title>
</head>

<body>
    <h1>Sample Form</h1>
</body>

</html>
Verify
To test this setup before moving on, open the terminal to the project folder (use cd as needed) and execute the install and run commands.

pipenv install Flask~=1.1
pipenv install Jinja2~=2.11
pipenv install python-dotenv~=0.13
pipenv run flask run
Open the url in your browser to confirm the website is loading properly (http://127.0.0.1:5000/). Click the "Form" link. Both pages should show without errors.

Form class
Now you are ready to build your first form!

First, you'll need to install Flask-WTF in order to use WTForms in your Flask application.

pipenv install Flask-WTF~=0.14
Next, create a new file to hold the form's class. Name it sample_form.py and save it in the app subfolder of your project.

The sample_form.py file will need to start by importing the form base class that comes with Flask-WTF.

from flask_wtf import FlaskForm
Also, it needs to import at least one form field which comes from the WTForms package that was installed with Flask-WTF.

from wtforms import StringField
A StringField accepts a string value using the HTML <input type="text">.

To put this string input field into your form, create the form as a class which inherits the FlaskForm base class, and create a property of the class which instantiates the StringField.

class SampleForm(FlaskForm):
    name = StringField('Name')
StringField needs at least one parameter - the label to show with the input box. In a future lesson, you'll learn to use additional parameters.

Make sure you save the sample_form.py file. It should look like this.

from flask_wtf import FlaskForm
from wtforms import StringField


class SampleForm(FlaskForm):
    name = StringField('Name')
Form view
Then update the template (app/templates/form.html) by adding the following after <h1>Sample Form</h1>.

<form action="" method="post" novalidate>
    {{ form.csrf_token }}
    <p>
        {{ form.name.label }}
        {{ form.name() }}
    </p>
</form>
This will make the whole form.html file look like this.

<!doctype html>
<html>

<head>
    <title>Sample Form</title>
</head>

<body>
    <h1>Sample Form</h1>
    <!-- form starts here -->
    <form action="" method="post" novalidate>
        {{ form.csrf_token }}
        <p>
            {{ form.name.label }}
            {{ form.name() }}
        </p>
    </form>
    <!-- form ends above -->
</body>

</html>
Finally, in the application main file you need to import the new form class and send it into the template as the form argument.

At the top add

from app.sample_form import SampleForm
In the form() function, replace return render_template('form.html') with

    form = SampleForm()
    return render_template('form.html', form=form)
Here's what the whole app/init.py file looks like now.

from flask import (Flask, render_template)
# import config class
from app.config import Config
# import form class
from app.sample_form import SampleForm

app = Flask(__name__)
# populate Flask config dictionary from config class
app.config.from_object(Config)


@app.route('/')
def index():
    # keep sample simple with just a link to the form
    return '<h1>Simple App</h1><a href="/form">Form</a>'


@app.route('/form')
def form():
    # instantiate form
    form = SampleForm()
    # send form into Jinja template (with form=form)
    return render_template('form.html', form=form)
Save all files and refresh your browser. Now you should see "Name" followed by an HTML input box when you are looking at the form page.

Upgrades
There are few easy additions you can make to your form.

Field size
If you'd like to set the width of the input field, then go to the form HTML and change {{ form.name() }} to {{ form.name(size=32) }}. Save the file and refresh your browser to see the change. The field now displays approximately 32 characters. Since it is based off average character width, you may be able to type a few more or a few less before it scrolls. You can modify the value, save and refresh to see other variations and fully understand this behavior.

Submit button
Add SubmitField to SampleForm class both in the import and as a property of the class.

from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField


class SampleForm(FlaskForm):
    name = StringField('Name')
    submit = SubmitField('Save')
Add form.submit() variable to form.html template before the end of the form (</form>).

<!doctype html>
<html>

<head>
    <title>Sample Form</title>
</head>

<body>
    <h1>Sample Form</h1>
    <!-- form starts here -->
    <form action="" method="post" novalidate>
        {{ form.csrf_token }}
        <p>
            {{ form.name.label }}
            {{ form.name(size=32) }}
        </p>
        <p>{{ form.submit() }}</p>
    </form>
    <!-- form ends above -->
</body>

</html>
After saving and refreshing the browser, a Save button will appear. If you click Save, you'll see a message that says "Method Not Allowed". You'll learn how to handle this in the next lesson. For now, click the back button in your browser to return to the form.

More field types
In addition to StringField and SubmitField, WTForms comes with many more field types as well. You will have the opportunity to learn about them in future lessons and activities. Until then, it is your responsibility to go read the documentation about the Basic Form Fields in the WTForms documentation and try them out on your own to see how they work. Knowledge of them are assessable.

What you've learned
Start a project with Flask, Jinja and Flask-WTF
Use StringField and SubmitField from WTForms
