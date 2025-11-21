from rest_framework.serializers import ModelSerializer
from .models import EtiquetaForo
from .models import Publicacion
from .models import Comentario
from .models import Reaccion

class EtiquetaSerializer(ModelSerializer):
    class Meta: 
        model = EtiquetaForo
        fields = "__all__"

class PublicacionSerializer(ModelSerializer):
    class Meta:
        model = Publicacion
        fields = "__all__"

class ComentarioSerializer(ModelSerializer):
    class Meta:
        model = Comentario
        fields = "__all__"
class ReaccionSerializer(ModelSerializer):
    class Meta:
        model = Reaccion
        fields = "__all__"