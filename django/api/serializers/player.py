"""
Rushing Stats Module
"""
from rest_framework.serializers import ModelSerializer

from api.models.player import Player
from api.serializers.team import TeamSerializer


class PlayerSerializer(ModelSerializer):
    """
    Default Serializer for Player
    """
    team = TeamSerializer()

    class Meta:
        model = Player
        fields = '__all__'
