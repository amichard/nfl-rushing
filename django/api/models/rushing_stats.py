from django.db import models


class RushingStats(models.Model):
    player = models.ForeignKey(
        'Player',
        on_delete=models.PROTECT,
        null=False
    )
    att_per_game = models.DecimalField(
        max_digits=5,
        decimal_places=1,
        null=True
    )
    att_total = models.DecimalField(
        max_digits=7,
        decimal_places=0,
        null=True
    )
    yds_total = models.DecimalField(
        max_digits=7,
        decimal_places=0,
        null=True
    )
    yds_avg_per_att = models.DecimalField(
        max_digits=5,
        decimal_places=1,
        null=True
    )
    yds_per_game = models.DecimalField(
        max_digits=7,
        decimal_places=1,
        null=True
    )
    td_total = models.DecimalField(
        max_digits=5,
        decimal_places=0,
        null=True
    )
    rush_max = models.DecimalField(
        max_digits=5,
        decimal_places=0,
        null=True
    )
    rush_max_td = models.BooleanField(
    )
    rush_1st = models.DecimalField(
        max_digits=5,
        decimal_places=0,
        null=True
    )
    rush_1st_pct = models.DecimalField(
        max_digits=5,
        decimal_places=1,
        null=True
    )
    rush_20_yds = models.DecimalField(
        max_digits=7,
        decimal_places=0,
        null=True
    )
    rush_40_yds = models.DecimalField(
        max_digits=7,
        decimal_places=0,
        null=True
    )
    fumbles_total = models.DecimalField(
        max_digits=7,
        decimal_places=0,
        null=True
    )

    class Meta:
        db_table = "rushing_stats"
