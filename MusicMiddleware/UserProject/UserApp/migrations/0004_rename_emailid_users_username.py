# Generated by Django 4.2.3 on 2023-07-13 19:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('UserApp', '0003_rename_username_users_emailid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='users',
            old_name='emailId',
            new_name='username',
        ),
    ]