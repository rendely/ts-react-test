from flask import render_template
from config import app

@app.route('/')
def index():
    return render_template("index.html")

@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")