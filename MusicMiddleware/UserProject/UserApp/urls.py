from django.urls import re_path
from UserApp import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    re_path(r'^user/$', views.userAPI),
    re_path(r'^user/([a-z]+[0-9]+)$', views.userAPI),

    re_path(r"^savefile$", views.saveFile),

    re_path(r"^user/login/", views.loginFun),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)