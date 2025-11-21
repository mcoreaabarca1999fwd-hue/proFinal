from rest_framework.serializers import ModelSerializer
from .models import CategoriaEducacion, ArticuloEducativo

class CategEduSerializer(ModelSerializer):
    class Meta:
        model = CategoriaEducacion
        fields = "__all__"

class ArticEduSerializer(ModelSerializer):
    class Meta:
        model = ArticuloEducativo
        fields = "__all__"