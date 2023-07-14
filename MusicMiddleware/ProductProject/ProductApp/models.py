from django.db import models

# Create your models here.
class SadSong(models.Model):
    name = models.CharField(max_length=50)
    sadsong = models.CharField(max_length=5000000000000000)

class ChillSong(models.Model):
    name = models.CharField(max_length=50)
    chillsong = models.CharField(max_length=600000000000000)

class EnglishSong(models.Model):
    name = models.CharField(max_length=50)
    englishsong = models.CharField(max_length=2500000000000000)