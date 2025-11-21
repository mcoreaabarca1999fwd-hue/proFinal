from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import EtiquetaForo, Publicacion, Comentario,Reaccion
from .serializers import EtiquetaSerializer, PublicacionSerializer, ComentarioSerializer,ReaccionSerializer
# Create your views here.

class EtiquetaCreateView(ListCreateAPIView):
    queryset = EtiquetaForo.objects.all()
    serializer_class = EtiquetaSerializer

class PublicacionCreateView(ListCreateAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer

class ComentarioCreateView(ListCreateAPIView):
    queryset = Comentario.objects.all()
    serializer_class = ComentarioSerializer

class ReaccionCreateView(ListCreateAPIView):
    queryset = Reaccion.objects.all()
    serializer_class = ReaccionSerializer