from django.db import models

# Create your models here.
class Student(models.Model):
    studentID = models.AutoField(primary_key=True)
    Fname = models.CharField(max_length=100)
    Sname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    date = models.DateField()
    head = models.CharField(max_length=100,default="")
    memory = models.TextField()

class Creator(models.Model):
    creatorID = models.AutoField(primary_key=True)
    Fname = models.CharField(max_length=100)
    Sname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)


    