from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from UserApp.models import Users
from UserApp.serializer import UserSerializer
from django.core.files.storage import default_storage
import os

# Create your views here.

@csrf_exempt
def userAPI(request, id=0):
    if request.method == 'GET':
        users = Users.objects.all()
        user_serializer = UserSerializer(users, many=True)
        return JsonResponse(user_serializer.data, safe=False)
    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        user_serializer = UserSerializer(data=user_data)
        print(user_serializer)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added", safe=False)
        return JsonResponse("Failed: User Already Exist", safe=False)
    elif request.method == 'PUT':
        user_data=JSONParser().parse(request)
        user=Users.objects.get(username=user_data['username'])
        user_serializer=UserSerializer(user, data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("updated", safe=False)
        return JsonResponse("update failed", safe=False)
    elif request.method == 'DELETE':
        user = Users.objects.get(username=id)
        user.delete()
        return JsonResponse('Deleted', safe=False)

@csrf_exempt
def saveFile(request):
    file = request.FILES['uploadfile']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)


def delete_file(path):
    # Deletes file from filesystem.
    if os.path.isfile(path):
        os.remove(path)

@csrf_exempt
def deletefile(request):
    incomming_path=JSONParser().parse(request)
    file_path= incomming_path['data']
    delete_file(file_path)
    return JsonResponse("deleted", safe=False)

@csrf_exempt
def loginFun(request):
    userdata = JSONParser().parse(request)
    username=userdata['username']
    password= userdata['password']    
    intakes = Users.objects.all().filter(username=username, password=password)
    user= Users.objects.all().filter(username=username)
    user_serializer= UserSerializer(user , many=True)
    null={}
    for intake in intakes:
        if (intake.username == username and intake.password == password) == 1:
            return JsonResponse(user_serializer.data[0], safe=False)
        else:
            return JsonResponse(null)
          