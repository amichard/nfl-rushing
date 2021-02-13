"""
Rushing Stats Module
"""
import json
from os import path
from django.core.management import BaseCommand

from api.services.rushing_stats import import_from_json


class Command(BaseCommand):
    """
    Command line function to import a JSON file into their respective
    Rushing Stats Models
    """
    help = 'Loads JSON file into the players and rushing_stats table'

    def add_arguments(self, parser):
        parser.add_argument(
            'json_file', help='Filename of the JSON being imported'
        )

    def handle(self, *args, **options):
        json_file = options.get('json_file')
        if not path.exists(json_file):
            self.stdout.write(self.style.ERROR(
                'Cannot find {file}. '
                'Please make sure the filename is correct.'.format(
                    file=json_file
                )
            ))
            return False

        with open(json_file, 'r') as file:
            try:
                data = json.load(file)
            except Exception as error:
                self.stdout.write(self.style.ERROR(
                    '{file} is not a valid JSON file. '
                ))
                return False

            rows_created = import_from_json(data)
            self.stdout.write(self.style.SUCCESS(
                '{number} rows have been imported into the database.'.format(
                    number=rows_created
                )
            ))
