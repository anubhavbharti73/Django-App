from rest_framework import serializers
from FavoriteApp.models import Favorite

class FavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ('username',
                  'name',
                  'file')