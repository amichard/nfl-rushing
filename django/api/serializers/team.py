"""
Rushing Stats Module
"""
from rest_framework.serializers import ModelSerializer

from api.models.team import Team


class TeamSerializer(ModelSerializer):
    """
    Default Serializer for Team
    """
    class Meta:
        model = Team
        fields = (
            't_code', 't_name',
        )
