from django.urls import path
from .views import CicloCreateView,RegisSintoCreateView,CicloPorUsuarioView

urlpatterns = [
    path('ciclo/', CicloCreateView.as_view()),
    path('resgistrar-sintoma/', RegisSintoCreateView.as_view()),
    path('ciclo-usuario/<int:usuario_id>/', CicloPorUsuarioView.as_view()),
]