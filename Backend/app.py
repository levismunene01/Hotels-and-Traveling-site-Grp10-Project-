from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, jwt_required
from models import db, Hotel
from auth import auth

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'supersecretkey'

db.init_app(app)
jwt = JWTManager(app)

app.register_blueprint(auth)

with app.app_context():
    db.create_all()

@app.route('/hotels', methods=['GET'])
def get_hotels():
    hotels = Hotel.query.all()
    hotel_list = []
    for hotel in hotels:
        hotel_list.append({
            'id': hotel.id,
            'name': hotel.name,
            'destination': hotel.destination,
            'picture': hotel.picture,
            'price_per_night': hotel.price_per_night,
            'rating': hotel.rating,
            'amenities': hotel.amenities
        })
    return jsonify(hotel_list)

@app.route('/hotels', methods=['POST'])
@jwt_required()
def add_hotel():
    data = request.get_json()
    new_hotel = Hotel(
        name=data['name'],
        destination=data['destination'],
        picture=data['picture'],
        price_per_night=data['price_per_night'],
        rating=data['rating'],
        amenities=data['amenities']
    )
    db.session.add(new_hotel)
    db.session.commit()
    return jsonify({'message': 'Hotel added successfully'})

@app.route('/hotels/<int:id>', methods=['PUT'])
@jwt_required()
def update_hotel(id):
    hotel = Hotel.query.get_or_404(id)
    data = request.get_json()
    hotel.name = data['name']
    hotel.destination = data['destination']
    hotel.picture = data['picture']
    hotel.price_per_night = data['price_per_night']
    hotel.rating = data['rating']
    hotel.amenities = data['amenities']
    db.session.commit()
    return jsonify({'message': 'Hotel updated successfully'})

@app.route('/hotels/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_hotel(id):
    hotel = Hotel.query.get_or_404(id)
    db.session.delete(hotel)
    db.session.commit()
    return jsonify({'message': 'Hotel deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
