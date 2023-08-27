#!/usr/bin/env python3
from config import app
from routes.routes import *
# from server.models.models import *

if __name__ == '__main__':
    app.run(port=5555, debug=True)