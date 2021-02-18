from django.test import TestCase


class BaseTestCase(TestCase):
    fixtures = [
        'teams.json',
        'tests/players.json',
        'tests/rushing_stats.json'
    ]
