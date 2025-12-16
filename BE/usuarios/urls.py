from django.urls import path
from .views import UsuarioCreateView,UsuarioLogin,UsuarioPorIdView
from .views import EliminarUsuarioView
from .views import EditarUsuarioView

urlpatterns = [
    path('crear-usuario/',UsuarioCreateView.as_view()),
    path('login/',UsuarioLogin.as_view()),
    path('usuario/<int:id>/',UsuarioPorIdView.as_view()),
    path('eliminar-usuario/<int:id>/', EliminarUsuarioView.as_view()),
    path('editar-usuario/', EditarUsuarioView.as_view()),
]

