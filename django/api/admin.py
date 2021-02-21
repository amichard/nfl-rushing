"""
Documentation:
https://docs.djangoproject.com/en/3.1/ref/contrib/admin/
"""
from django.contrib import admin
from api.models.player import Player
from api.models.rushing_stats import RushingStats
from api.models.team import Team

admin.site.register(Player)
admin.site.register(RushingStats)
admin.site.register(Team)
