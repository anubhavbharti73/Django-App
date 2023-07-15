from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import  JSONParser
from django.http.response import JsonResponse
from FavoriteApp.models import Favorite
from FavoriteApp.serializer import FavSerializer

# Create your views here.

@csrf_exempt
def getFavList(request, id=0):
    if request.method == 'POST':
        userdata= JSONParser().parse(request)
        username=userdata['username']
        favlists= Favorite.objects.all().filter(username=username)
        fav_serializer=FavSerializer(favlists, many=True)
        return JsonResponse(fav_serializer.data , safe=False)

  
@csrf_exempt
def saveToFav(request, id=0):
    if request.method == 'POST':
        fav_data=JSONParser().parse(request)
        fav_serializer = FavSerializer(data=fav_data)
        if fav_serializer.is_valid():
             fav_serializer.save()
             return JsonResponse("Fav Saved", safe=False)
        return JsonResponse("Can not Save Fav", safe=False) 
    elif request.method == "DELETE":
         fav =Favorite.objects.get(ref=id)
         fav.delete()
         return JsonResponse("Deleted", safe=False)
           
