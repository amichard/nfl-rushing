from django.db import models


class Player(models.Model):
    first_name = models.CharField(
        blank=False,
        max_length=100,
        null=False
    )
    last_name = models.CharField(
        blank=False,
        max_length=100,
        null=False
    )
    team = models.ForeignKey(
        'Team',
        on_delete=models.PROTECT,
        null=False
    )
    position = models.CharField(
        blank=False,
        max_length=3,
        null=False
    )

    class Meta:
        db_table = 'players'
        unique_together = [[
            'first_name', 'last_name', 'team'
        ]]
