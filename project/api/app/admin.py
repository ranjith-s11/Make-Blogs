from django.contrib import admin
from .models import Student, Creator

models = [Student,Creator]
admin.site.register(models)

# Register your models here.
