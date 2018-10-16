from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import AnimalModel

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///animals.db'
db = SQLAlchemy(app)


if __name__ == '__main__':
    animal = AnimalModel(name='Edginald', species='CSL', weight=15, isGettingTubed=True, isGettingControlledMeds=True)
    db.session.add(animal)
    db.session.commit()
