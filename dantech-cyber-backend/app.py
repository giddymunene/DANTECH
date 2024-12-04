from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/services', methods=['GET'])
def get_services():
    services = [
        {"title": "Vehicle Search", "description": "NTSA services"},
        {"title": "eCitizen Services", "description": "Applications and registrations"},
        {"title": "Web Development", "description": "Graphic and web design services"}
    ]
    return jsonify(services)

if __name__ == "__main__":
    app.run(debug=True)
