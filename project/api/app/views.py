from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Student , Creator
from .serializers import StudentSerializer , CreatorSerializer
from django.http.response import JsonResponse
from django.http.response import Http404


class StudentView(APIView):

    def post(self, request):
        data = request.data
        serializer = StudentSerializer(data = data)

        if serializer.is_valid():
            serializer.save()
            try:
                creator = Creator.objects.get(email=data['email'])
            except:
                creator = Creator.objects.create(Fname=data['Fname'], Sname=data['Sname'], email=data['email'])
                creator.save() 
            return JsonResponse("Student created", safe = False)

        return JsonResponse("Failed to create", safe=False)
    
    def get_student(self, pk):
        try:
            student = Student.objects.get(studentID=pk)
            return student
        except:
            return JsonResponse("Student Does Not Exist", safe=False)

    def get(self, request, pk=None):
        if pk:
            data = self.get_student(pk)
            serializer = StudentSerializer(data)
        else:
            data = Student.objects.all()
            serializer = StudentSerializer(data, many=True)
        return Response(serializer.data)
    
    def put(self, request, pk=None):
        update = Student.objects.get(studentID=pk)
        serializer = StudentSerializer(instance=update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student updated Successfully", safe=False)
        return JsonResponse("Failed To Update Student")
    
    def delete(self, request, pk):
        deleteItem = Student.objects.get(studentID=pk)
        deleteItem.delete()
        return JsonResponse("Student Deleted Successfully", safe=False)
    
class CreatorView(APIView):
            
    def get(self, request):
        data = Creator.objects.all()
        serializer = CreatorSerializer(data, many=True)
        return Response(serializer.data)



