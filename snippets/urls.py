
from django.conf.urls import url
from django.contrib import admin
from snippets import views

urlpatterns = [
    url(r'^$', views.snippet_base),
    url(r'^snippets/$', views.snippet_list),
    url(r'^snippets/(?P<pk>[0-9]+)/$', views.snippet_detail),
]
