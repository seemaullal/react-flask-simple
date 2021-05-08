from flask import Flask, render_template

app = Flask(__name__)

# Any API routes for AJAX requests

@app.route('/', defaults={'path': ''})

@app.route('/<path:path>')
def index(path):
    return render_template('main.html')


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')