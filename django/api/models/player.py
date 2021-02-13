"""
Rushing Stats Module
"""
from django.db.models import CharField, ForeignKey, Model, PROTECT


class Player(Model):
    """
    Player Model
    """
    first_name = CharField(
        blank=False,
        max_length=100,
        null=False
    )
    last_name = CharField(
        blank=False,
        max_length=100,
        null=False
    )
    team = ForeignKey(
        'Team',
        on_delete=PROTECT,
        null=False
    )
    position = CharField(
        blank=False,
        max_length=3,
        null=False
    )

    class Meta:
        db_table = 'players'
        unique_together = [[
            'first_name', 'last_name', 'team'
        ]]
