"""
Manager for Team Model
"""
from django.db.models import Manager


class TeamManager(Manager):
    """
    Allows us to reference a record from the Team Model by team code
    instead of Primary Key
    """
    def get_by_natural_key(self, t_code):
        return self.get(t_code=t_code)
