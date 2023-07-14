from rest_framework import serializers
from ProductApp.models import SadSong, ChillSong, EnglishSong

class SadSerializer (serializers.ModelSerializer):
    class Meta:
        model = SadSong
        fields = ('name',
                  'sadsong')

class ChillSerializer (serializers.ModelSerializer):
    class Meta:
        model = ChillSong
        fields = ('name',
                  'chillsong')

class EnglishSerializer (serializers.ModelSerializer):
    class Meta:
        model = EnglishSong
        fields = ('name', 'englishsong')