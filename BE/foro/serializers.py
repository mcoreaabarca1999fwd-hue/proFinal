from rest_framework.serializers import ModelSerializer
from .models import EtiquetaForo
from .models import Publicacion
from .models import Comentario
from .models import Reaccion
from rest_framework import serializers
class EtiquetaSerializer(ModelSerializer):
    class Meta: 
        model = EtiquetaForo
        fields = "__all__"

class PublicacionSerializer(ModelSerializer):
    nombre_usuario = serializers.CharField(source='Usuario.username', read_only=True)
    class Meta:
        model = Publicacion
        fields = ["id", "Usuario", "nombre_usuario", "etiquetaForo", "titulo", "contenido", "fecha_creacion"]

class ComentarioSerializer(ModelSerializer):
    class Meta:
        model = Comentario
        fields = "__all__"
class ReaccionSerializer(ModelSerializer):
    class Meta:
        model = Reaccion
        fields = "__all__"