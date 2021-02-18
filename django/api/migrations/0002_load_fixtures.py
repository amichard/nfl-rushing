"""
Manually created to automate importing of the initial data
"""
import os
from score import settings

from django.db import migrations


def database_forward(_apps, _schema_editor):
    if not settings.TESTING:
        os.system('./init.sh')


def database_reverse(_apps, _schema_editor):
    if not settings.TESTING:
        os.system('./clear.sh')


class Migration(migrations.Migration):
    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(database_forward, database_reverse),
    ]
