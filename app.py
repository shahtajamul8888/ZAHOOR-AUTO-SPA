from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/book', methods=['POST'])
def book():
    data = request.json
    return jsonify({"status": "success", "message": "Booking confirmed!"})

@app.route('/pay', methods=['POST'])
def pay():
    return jsonify({"status": "success", "message": "Payment updated!"})

@app.route('/bookings', methods=['GET'])
def bookings():
    return jsonify([])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)