from django.db import models


class Team(models.Model):
    t_code = models.CharField(
        blank=False,
        max_length=3,
        null=False
    )
    t_name = models.CharField(
        blank=False,
        max_length=50,
        null=False
    )

    class Meta:
        db_table = 'teams'
