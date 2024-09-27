from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from config import Config
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)

# MySQL Configuration
app.config.from_object(Config)

# Enable CORS
CORS(app)

# Initialize MySQL
mysql = MySQL(app)

# Route for checking login credentials
@app.route('/login', methods=['POST'])
def login_user():
    try:
        data = request.get_json()
        username = data['username']
        password = data['password']

        cur = mysql.connection.cursor()
        cur.execute("SELECT password FROM users WHERE username = %s", (username,))
        user = cur.fetchone()

        if not user:
            return jsonify({"error": "Username does not exist"}), 404

        # Check if the password matches the hashed password in the database
        if check_password_hash(user['password'], password):
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"error": "Invalid password"}), 401
    except Exception as e:
        return jsonify({"error": str(e)})

# Route for creating a new user (signup)
@app.route('/signup', methods=['POST'])
def signup_user():
    try:
        data = request.get_json()
        username = data['username']
        password = data['password']

        # Check if the username already exists
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE username = %s", (username,))
        existing_user = cur.fetchone()

        if existing_user:
            return jsonify({"error": "Username already exists"}), 409

        # Hash the password before storing it
        hashed_password = generate_password_hash(password)

        cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, hashed_password))
        mysql.connection.commit()

        return jsonify({"message": "User registered successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
