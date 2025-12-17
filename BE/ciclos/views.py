from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import Ciclo, RegistroSintoma
from .serializers import CicloSerializer, RegisSintomaSerializer
# Create your views here.

class CicloCreateView(ListCreateAPIView):
    queryset = Ciclo.objects.all()
    serializer_class = CicloSerializer



class RegisSintoCreateView(ListCreateAPIView):
    queryset = RegistroSintoma.objects.all()
    serializer_class = RegisSintomaSerializer

class CicloPorUsuarioView(ListCreateAPIView):
    serializer_class = CicloSerializer

    def get_queryset(self):
        usuario_id = self.kwargs['usuario_id']
        return Ciclo.objects.filter(usuario__id=usuario_id)
