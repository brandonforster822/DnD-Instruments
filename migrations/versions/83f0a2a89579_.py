"""empty message

Revision ID: 83f0a2a89579
Revises: 
Create Date: 2021-04-17 15:25:44.190236

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '83f0a2a89579'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('characters',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('level', sa.Integer(), nullable=False),
    sa.Column('characterClass', sa.String(length=30), nullable=False),
    sa.Column('race', sa.String(length=30), nullable=False),
    sa.Column('alignment', sa.String(length=30), nullable=False),
    sa.Column('proficiencies', sa.String(length=500), nullable=False),
    sa.Column('personality__traits', sa.String(length=500), nullable=False),
    sa.Column('ideals', sa.String(length=500), nullable=False),
    sa.Column('bonds', sa.String(length=500), nullable=False),
    sa.Column('flaws', sa.String(length=500), nullable=False),
    sa.Column('strength', sa.Integer(), nullable=False),
    sa.Column('dex', sa.Integer(), nullable=False),
    sa.Column('constitution', sa.Integer(), nullable=False),
    sa.Column('intelligence', sa.Integer(), nullable=False),
    sa.Column('wisdom', sa.Integer(), nullable=False),
    sa.Column('charisma', sa.Integer(), nullable=False),
    sa.Column('saving__throw__one', sa.String(length=30), nullable=False),
    sa.Column('saving__throw__two', sa.String(length=30), nullable=False),
    sa.Column('skill_one', sa.String(length=30), nullable=False),
    sa.Column('skill_two', sa.String(length=30), nullable=False),
    sa.Column('skill_three', sa.String(length=30), nullable=False),
    sa.Column('skill_four', sa.String(length=30), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('characters')
    op.drop_table('users')
    # ### end Alembic commands ###
