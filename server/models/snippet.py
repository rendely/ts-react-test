from sqlalchemy_serializer import SerializerMixin
from config import db

class Snippet(db.Model, SerializerMixin):

  __tablename__ = 'snippets'
  
  id = db.Column(db.Integer, primary_key = True)
  body = db.Column(db.String)

  def __repr__(self):
    return f'<Snippet id={self.id} body={self.body[:20]}>'