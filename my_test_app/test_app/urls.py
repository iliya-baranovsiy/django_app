from django.urls import path
from . import views
from .views import get, post, hello_page,hello_page_1,okay


urlpatterns = [
    path('redirect/', views.redirect_func, name='redirect'),
    path('head_page/', views.hello_page, name='test'),
    path('get/<int:id>/', get),
    path('test_post/', post),
    path('',hello_page_1),
    path('favicon.ico', okay)
]
