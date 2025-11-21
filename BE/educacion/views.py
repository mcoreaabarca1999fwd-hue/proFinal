from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import CategoriaEducacion, ArticuloEducativo
from .serializers import CategEduSerializer, ArticEduSerializer
# Create your views here.

class CategEduCreateView(ListCreateAPIView):
    queryset = CategoriaEducacion.objects.all()
    serializer_class = CategEduSerializer

class ArticEduCreateView(ListCreateAPIView):
    queryset = ArticuloEducativo.objects.all()
    serializer_class = ArticEduSerializer