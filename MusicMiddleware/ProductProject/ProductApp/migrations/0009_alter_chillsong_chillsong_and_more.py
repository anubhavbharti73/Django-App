# Generated by Django 4.2.3 on 2023-07-14 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ProductApp', '0008_alter_sadsong_sadsong'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chillsong',
            name='chillsong',
            field=models.CharField(max_length=600000000000000),
        ),
        migrations.AlterField(
            model_name='englishsong',
            name='englishsong',
            field=models.CharField(max_length=250000000000000),
        ),
        migrations.AlterField(
            model_name='sadsong',
            name='sadsong',
            field=models.CharField(max_length=5000000000000000),
        ),
    ]
