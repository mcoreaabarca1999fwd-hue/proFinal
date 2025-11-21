from rest_framework.serializers import ModelSerializer
from .models import Seguimiento
from .models import PublicacionSocial


class SeguimientoSerializer(ModelSerializer):
    class Meta:
        model = Seguimiento
        fields = "__all__"

class PublicacionSociSerializer(ModelSerializer):
    class Meta:
        model = PublicacionSocial
        fields = "__all__"

