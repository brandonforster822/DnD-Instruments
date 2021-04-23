from .db import db
from sqlalchemy.orm import relationship

class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    users = relationship("User", back_populates='characters')
    name = db.Column(db.String(40), nullable = False)
    level = db.Column(db.Integer, nullable = False)
    characterClass = db.Column(db.String(30), nullable = False)
    race = db.Column(db.String(30), nullable = False)
    alignment = db.Column(db.String(30), nullable = False)
    proficiencies = db.Column(db.String(500), nullable = False)
    personality__traits = db.Column(db.String(500), nullable = False)
    ideals = db.Column(db.String(500), nullable = False)
    bonds = db.Column(db.String(500), nullable = False)
    flaws = db.Column(db.String(500), nullable = False)
    strength = db.Column(db.Integer, nullable = False)
    dex = db.Column(db.Integer, nullable = False)
    constitution = db.Column(db.Integer, nullable = False)
    intelligence = db.Column(db.Integer, nullable = False)
    wisdom = db.Column(db.Integer, nullable = False)
    charisma = db.Column(db.Integer, nullable = False)
    saving__throw__one = db.Column(db.String(30), nullable = False)
    saving__throw__two = db.Column(db.String(30), nullable = False)
    skill_one = db.Column(db.String(30), nullable = False)
    skill_two = db.Column(db.String(30), nullable = False)
    skill_three = db.Column(db.String(30), nullable = False)
    skill_four = db.Column(db.String(30), nullable = False)

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "name": self.name,
            "level": self.level,
            "characterClass": self.characterClass,
            "race": self.race,
            "alignment": self.alignment,
            "proficiencies": self.proficiencies,
            "personality__traits": self.personality__traits,
            "ideals": self.ideals,
            "bonds": self.bonds,
            "flaws": self.flaws,
            "strength": self.strength,
            "dex": self.dex,
            "constitution": self.constitution,
            "intelligence": self.intelligence,
            "wisdom": self.wisdom,
            "charisma": self.charisma,
            "saving__throw__one": self.saving__throw__one,
            "saving__throw__two": self.saving__throw__two,
            "skill_one": self.skill_one,
            "skill_two": self.skill_two,
            "skill_three": self.skill_three,
            "skill_four": self.skill_four
            }