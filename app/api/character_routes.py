from flask import Blueprint, jsonify, request
from app.models import Character, db
from app.forms import CharacterForm


character_routes = Blueprint('character', __name__)

@character_routes.route('/create', methods=['POST'])
def createCharacter():
    form = CharacterForm()
    character = Character(
        userId=form.data['userId'],
        name=form.data['name'],
        level=form.data['level'],
        characterClass=form.data['characterClass'],
        race=form.data['race'],
        alignment=form.data['alignment'],
        proficiencies=form.data['proficiencies'],
        personality__traits=form.data['traits'],
        ideals=form.data['ideals'],
        bonds=form.data['bonds'],
        flaws=form.data['flaws'],
        strength=form.data['strength'],
        dex=form.data['dex'],
        constitution=form.data['constitution'],
        intelligence=form.data['intelligence'],
        wisdom=form.data['wisdom'],
        charisma=form.data['charisma'],
        saving__throw__one=form.data['savingThrowOne'],
        saving__throw__two=form.data['savingThrowTwo'],
        skill_one=form.data['skillOne'],
        skill_two=form.data['skillTwo'],
        skill_three=form.data['skillThree'],
        skill_four=form.data['skillFour']
    )
    db.session.add(character)
    db.session.commit()
    return character.to_dict()


@character_routes.route('/get', methods=["POST"])
def characters():
    passedId = request.data.decode("UTF-8")
    characters = Character.query.filter_by(userId=passedId).all()
    return {"userCharacters": [cha.to_dict() for cha in characters]}

@character_routes.route('/getone', methods=["POST"])
def character():
    characterId = request.data.decode("UTF-8")
    character = Character.query.get(characterId)
    return {"oneCharacter": character.to_dict()}