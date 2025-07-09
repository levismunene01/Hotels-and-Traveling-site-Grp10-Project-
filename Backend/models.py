from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

class Hotel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    destination = db.Column(db.String(100), nullable=False)
    picture = db.Column(db.String(255), nullable=False)
    price_per_night = db.Column(db.String(50), nullable=False)
    rating = db.Column(db.String(50), nullable=False)
    amenities = db.Column(db.String(255), nullable=False)
