from app import app, db
from models.models import *

with app.app_context():
    print("Starting seed...")
    Snippet.query.delete()
    snippet = Snippet(content='This is how you sort an array')
    db.session.add(snippet)
    db.session.commit()
    print("Finished seed!")