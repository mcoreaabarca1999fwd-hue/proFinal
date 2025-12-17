from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,ListAPIView

from .models import EtiquetaForo, Publicacion, Comentario,Reaccion
from .serializers import EtiquetaSerializer, PublicacionSerializer, ComentarioSerializer,ReaccionSerializer
from rest_framework.permissions import IsAuthenticated,BasePermission,SAFE_METHODS,IsAuthenticatedOrReadOnly # Importamos la funcionalidad de restringir una vista
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.generics import DestroyAPIView
from .models import Publicacion
from .serializers import PublicacionSerializer

class EtiquetaCreateView(ListCreateAPIView):
    queryset = EtiquetaForo.objects.all()
    serializer_class = EtiquetaSerializer

# todas las publicaciones - para poder hacer el post
class PublicacionCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]  # Restringimos el acceso a usuarios autenticados (que iniciaron sesion)
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

class ComentarioPorPublicacionView(ListAPIView):
    serializer_class = ComentarioSerializer

    def get_queryset(self):
        publicacion_id = self.kwargs['publicacion_id']
        return Comentario.objects.filter(Publicacion__id=publicacion_id)

class ReaccionCreateView(ListCreateAPIView):
    queryset = Reaccion.objects.all()
    serializer_class = ReaccionSerializer


class EliminarPublicacionView(DestroyAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer
    # permission_classes = [IsAuthenticated]
    lookup_field = 'id'


class EditarPublicacionView(APIView):
    def patch(self,request):
        id_foro = request.data.get('id_foro')
        titulo = request.data.get('titulo')
        descripcion = request.data.get('descripcion')
        etiqueta = request.data.get('etiqueta')
        publicacion = Publicacion.objects.get(id=id_foro)
        publicacion.titulo = titulo
        publicacion.descripcion = descripcion
        publicacion.etiqueta = etiqueta
        publicacion.save()
        
        return Response({
            'message': "Foro editado exitosamente"
        })