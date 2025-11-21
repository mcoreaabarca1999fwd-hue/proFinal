from django.urls import path
from .views import UsuarioCreateView,UsuarioLogin,UsuarioPorIdView


urlpatterns = [
    path('crear-usuario/',UsuarioCreateView.as_view()),
    path('login/',UsuarioLogin.as_view()),
    path('usuario/<int:id>/',UsuarioPorIdView.as_view())
]

