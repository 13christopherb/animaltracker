from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from __init__ import Animal, db
from flask_cors import CORS, cross_origin
from flask_marshmallow import Marshmallow
"""Initialization and configuration"""
app = Flask(__name__)
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/animals.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

CORS(app, resources={r"/*": {"origins": "*"}})
ma = Marshmallow(app)


class AnimalSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('name', 'species', 'weight', 'isGettingTubed', 'isGettingControlledMeds', 'id')


animal_schema = AnimalSchema()
animals_schema = AnimalSchema(many=True)

@app.route('/')
def index():
    return "index"

# API


@app.route('/animals', methods=['GET','POST', 'OOPTIONS'])
@cross_origin()
def get_animals():
    """
    Returns a json object representing an item

    :return: json representation of item
    """
    if request.method == 'POST':
        obj = request.get_json()
        animal = Animal(name=obj['name'], species=obj['species'], weight=obj['weight'],
                             isGettingTubed=obj['isGettingTubed'],
                             isGettingControlledMeds = obj['isGettingControlledMeds'])

        db.session.add(animal)
        db.session.commit()
        print(animal)
        response = jsonify({'some': 'data'})
        return response
    if request.method == 'GET':
        animals = Animal.query.all()
        result = animals_schema.dump(animals)
        return jsonify(result.data)
    obj = 'test'
    return jsonify(obj)


if __name__ == '__main__':
    db.init_app(app)
    db.app = app
    app.debug = True
    app.run(host='0.0.0.0', port=5000)