from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import  JSONParser
from django.http.response import JsonResponse
from FavoriteApp.models import Favorite
from FavoriteApp.serializer import FavSerializer

# Create your views here.

@csrf_exempt
def getFavList(request):
        userdata= JSONParser().parse(request)
        username=userdata['username']
        favlist= Favorite.objects.all().filter(username=username)
        fav_serializer=FavSerializer(favlist, many=True)
        if fav_serializer.is_valid():
            return JsonResponse(fav_serializer.data , safe=False)
