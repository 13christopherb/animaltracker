from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)


class Animal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    species = db.Column(db.String, nullable=False)
    weight = db.Column(db.Integer)
    isGettingTubed = db.Column(db.Boolean)
    isGettingControlledMeds = db.Column(db.Boolean)