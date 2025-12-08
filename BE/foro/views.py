from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,ListAPIView
from .models import EtiquetaForo, Publicacion, Comentario,Reaccion
from .serializers import EtiquetaSerializer, PublicacionSerializer, ComentarioSerializer,ReaccionSerializer
from rest_framework.permissions import IsAuthenticated,BasePermission,SAFE_METHODS # Importamos la funcionalidad de restringir una vista



class EtiquetaCreateView(ListCreateAPIView):
    queryset = EtiquetaForo.objects.all()
    serializer_class = EtiquetaSerializer

# todas las publicaciones - para poder hacer el post
class PublicacionCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]  # Restringimos el acceso a usuarios autenticados (que iniciaron sesion)
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer

# todas las publicaciones - sin restriccion
class VerPublicaciones(ListAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer

class PublicacionIdCreateView(ListAPIView):
    # permission_classes = [IsAuthenticated]  # Restringimos el acceso a usuarios autenticados (que iniciaron sesion)
    serializer_class = PublicacionSerializer

    def get_queryset(self):
        id_publicacion = self.kwargs["id"] # obtener un id por la URL 
        return Publicacion.objects.filter(id=id_publicacion)



class ComentarioCreateView(ListCreateAPIView):
    queryset = Comentario.objects.all()
    serializer_class = ComentarioSerializer

class ReaccionCreateView(ListCreateAPIView):
    queryset = Reaccion.objects.all()
    serializer_class = ReaccionSerializer