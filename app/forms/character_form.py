from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CharacterForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    level = IntegerField('level', validators=[DataRequired()])
    characterClass = StringField('characterClass', validators=[DataRequired()])
    race = StringField('race', validators=[DataRequired()])
    alignment = StringField('alignment', validators=[DataRequired()])
    proficiencies = StringField('proficiencies', validators=[DataRequired()])
    traits = StringField('personalitytraits', validators=[DataRequired()])
    ideals = StringField('ideals', validators=[DataRequired()])
    bonds = StringField('bonds', validators=[DataRequired()])
    flaws = StringField('flaws', validators=[DataRequired()])
    strength = IntegerField('strength', validators=[DataRequired()])
    dex = IntegerField('dex', validators=[DataRequired()])
    constitution = IntegerField('constitution', validators=[DataRequired()])
    intelligence = IntegerField('intelligence', validators=[DataRequired()])
    wisdom = IntegerField('wisdom', validators=[DataRequired()])
    charisma = IntegerField('charisma', validators=[DataRequired()])
    savingThrowOne = StringField('savingThrowOne', validators=[DataRequired()])
    savingThrowTwo = StringField('savingThrowTwo', validators=[DataRequired()])
    skillOne = StringField('skillOne', validators=[DataRequired()])
    skillTwo = StringField('skillTwo', validators=[DataRequired()])
    skillThree = StringField('skillThree', validators=[DataRequired()])
    skillFour = StringField('skillFour', validators=[DataRequired()])
