from django.db import models

# Create your models here.

class Favorite(models.Model):
    username= models.CharField(max_length=50)
    name= models.CharField(max_length=50)
    file= models.CharField(max_length=10000000000000000)
