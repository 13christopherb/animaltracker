from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/animals.db'
db = SQLAlchemy(app)


class Animal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    species = db.Column(db.String, nullable=False)
    weight = db.Column(db.Integer)
    isGettingTubed = db.Column(db.Boolean)
    isGettingControlledMeds = db.Column(db.Boolean)

if __name__ == '__main__':
    db.create_all()
    animal = Animal(name='Frank', species='CSL', weight=15, isGettingTubed=False, isGettingControlledMeds=True)
    db.session.add(animal)
    db.session.commit()