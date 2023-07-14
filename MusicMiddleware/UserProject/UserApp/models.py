from django.db import models

# Create your models here.
class Users(models.Model):
    name = models.CharField(max_length=50)
    username = models.CharField(primary_key=True, max_length=50)
    password = models.CharField(max_length=50)
    file = models.CharField(max_length= 100000000000)

