# Generated by Django 4.2.3 on 2023-07-14 22:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('FavoriteApp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='favorite',
            old_name='files',
            new_name='file',
        ),
    ]
