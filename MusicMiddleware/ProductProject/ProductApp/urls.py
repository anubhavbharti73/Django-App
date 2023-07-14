from django.urls import re_path
from ProductApp import views

urlpatterns = [

    re_path(r"^productsad/$" , views.sadSongAPI),
    re_path(r"^productchill/$" , views.chillSongAPI),
    re_path(r"^productenglish/$" , views.englishSongAPI),

]