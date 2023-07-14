from rest_framework import serializers
from UserApp.models import Users 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('name',
                  'username',
                  'password',
                  'file')