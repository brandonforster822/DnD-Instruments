from app.models import db, Character

def seed_characters():
    demoCharacter = Character()

    db.session.add(demoCharacter)
    db.session.commit()



def undo_characters():
    db.session.execute('TRUNCATE characters;')
    db.session.commit()
