"""
Rushing Stats Module
"""
from django.db.models import Q
from django_filters import FilterSet, CharFilter

from api.models.rushing_stats import RushingStats


class RushingStatsFilter(FilterSet):
    """
    Filter instructions for the model Rushing Stats
    Player name - Case insensitive and contains
    Team code, team name - Case insensitive and contains
    Rest of rushing stats - Exact
    """
    player = CharFilter(method='player_lookup')
    player__position = CharFilter(lookup_expr='icontains')
    team = CharFilter(method='team_lookup')

    def player_lookup(self, queryset, _name, value):
        """
        Allow filtering by first name or last name
        """
        if ',' in value:
            player_name = value.rsplit(',', 1)
            player_name = list(map(str.strip, player_name))
            player_name.reverse()
            value = ' '.join(player_name)

        if ' ' in value:
            first_name, last_name = value.split(' ', 1)

            return queryset.filter(
                Q(player__first_name__icontains=first_name) &
                Q(player__last_name__icontains=last_name)
            )

        return queryset.filter(
            Q(player__first_name__icontains=value) |
            Q(player__last_name__icontains=value)
        )

    def team_lookup(self, queryset, _name, value):
        """
        Allow filtering by team name or code
        """
        return queryset.filter(
            Q(player__team__t_code__icontains=value) |
            Q(player__team__t_name__icontains=value)
        )

    class Meta:
        model = RushingStats
        fields = [
            'att_per_game', 'att_total', 'yds_total', 'yds_avg_per_att',
            'yds_per_game', 'td_total', 'rush_max', 'rush_max_td',
            'rush_1st', 'rush_1st_pct', 'rush_20_yds', 'rush_40_yds',
            'fumbles_total',
        ]
