"""
Team Model
"""
from django.db.models import CharField, Model


class Team(Model):
    """
    Contains list of NFL teams
    * Prepending t_ to make it more distinguishable
    """
    t_code = CharField(
        blank=False,
        max_length=3,
        null=False
    )
    t_name = CharField(
        blank=False,
        max_length=50,
        null=False
    )

    class Meta:
        db_table = 'teams'
