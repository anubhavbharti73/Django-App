from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from ProductApp.models import SadSong, ChillSong, EnglishSong
from ProductApp.serializer import SadSerializer, ChillSerializer, EnglishSerializer

# Create your views here.

@csrf_exempt
def sadSongAPI(request, id=0):
    if request.method == 'GET':
        sadsongs = SadSong.objects.all()
        sad_serializer = SadSerializer(sadsongs, many=True)
        return JsonResponse(sad_serializer.data, safe=False)
    elif request.method == 'POST':
        sad_song_data = JSONParser().parse(request)
        sad_serializer = SadSerializer(data=sad_song_data)
        if sad_serializer.is_valid():
            sad_serializer.save()
            return JsonResponse("Added sad song" , safe=False)
        return JsonResponse("Failed to Add sad song" , safe= False)
    
@csrf_exempt
def chillSongAPI(request, id=0):
    if request.method == 'GET':
        chillsongs = ChillSong.objects.all()
        chill_serializer = ChillSerializer(chillsongs, many=True)
        return JsonResponse(chill_serializer.data, safe=False)
    elif request.method == 'POST':
        chill_song_data = JSONParser().parse(request)
        chill_serializer = ChillSerializer(data=chill_song_data)
        if chill_serializer.is_valid():
            chill_serializer.save()
            return JsonResponse("Added chill song" , safe=False)
        return JsonResponse("Failed to Add chill song" , safe= False)
    
@csrf_exempt
def englishSongAPI(request, id=0):
    if request.method == 'GET':
        englishsongs = EnglishSong.objects.all()
        english_serializer = EnglishSerializer(englishsongs, many=True)
        return JsonResponse(english_serializer.data, safe=False)
        
    elif request.method == 'POST':
        english_song_data = JSONParser().parse(request)
        english_serializer = EnglishSerializer(data = english_song_data)
        print(english_song_data)
        print(english_serializer.is_valid())
        if english_serializer.is_valid():
            english_serializer.save()
            return JsonResponse("Added english song" , safe=False)
        return JsonResponse("Failed to Add english song" , safe= False)