"""
Rushing Stats Module
"""
from rest_framework.mixins import ListModelMixin
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import GenericViewSet

from api.filters.rushing_stats import RushingStatsFilter
from api.models.rushing_stats import RushingStats
from api.serializers.rushing_stats import RushingStatsSerializer


class RushingStatsViewset(GenericViewSet, ListModelMixin):
    """
    Viewset for Rushing stats
    This will build the list view and tie it with the serializer and
    permissions
    """
    permission_classes = (AllowAny,)
    http_method_names = ['get']
    filterset_class = RushingStatsFilter
    ordering_fields = '__all_related__'

    serializer_classes = {
        'default': RushingStatsSerializer
    }

    def get_queryset(self):
        request = self.request
        queryset = RushingStats.objects.all()

        return queryset

    def get_serializer_class(self):
        if self.action in list(self.serializer_classes.keys()):
            return self.serializer_classes.get(self.action)

        return self.serializer_classes.get('default')
