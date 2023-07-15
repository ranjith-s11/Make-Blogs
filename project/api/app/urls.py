from django.contrib import admin
from django.urls import path
from .views import StudentView , CreatorView

urlpatterns = [
    path('app/', StudentView.as_view()),
    path('app/<int:pk>/', StudentView.as_view()),
    path('creator/',CreatorView.as_view())
]
