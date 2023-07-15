from django.urls import re_path
from FavoriteApp import views

urlpatterns=[
    re_path(r'^fav/', views.getFavList),
    re_path(r'^favsave/',views.saveToFav),
    re_path(r'^favdel/([0-9]+)$' , views.saveToFav)
]