from rest_framework import serializers
from .models import Student, Creator

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ( 'studentID',
                   'Fname',
                   'Sname',
                   'email',
                   'date',
                   'head',
                   'memory' )
        
class CreatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Creator
        fields = (  'creatorID',
                    'Fname',
                    'Sname',
                    'email' )