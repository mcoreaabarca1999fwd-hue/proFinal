from rest_framework.serializers import ModelSerializer
from .models import Ciclo
from .models import RegistroSintoma

class CicloSerializer(ModelSerializer):
    class Meta:
        model = Ciclo
        fields = "__all__"

class RegisSintomaSerializer(ModelSerializer):
    class Meta:
        model = RegistroSintoma
        fields = "__all__"