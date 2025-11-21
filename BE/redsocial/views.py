from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import Seguimiento, PublicacionSocial
from .serializers import SeguimientoSerializer, PublicacionSociSerializer
# Create your views here.

class SeguimientoCreateView(ListCreateAPIView):
    queryset = Seguimiento.objects.all()
    serializer_class = SeguimientoSerializer


