from django.urls import path
from .views import EtiquetaCreateView, PublicacionCreateView, ComentarioCreateView,ReaccionCreateView,VerPublicaciones

urlpatterns = [
    path('publicacion/', PublicacionCreateView.as_view()),
    path('ver-publicacion/', VerPublicaciones.as_view()),
    path('etiqueta/', EtiquetaCreateView.as_view),
    path('comentario/', ComentarioCreateView.as_view),
    path('reaccion/', ReaccionCreateView.as_view)

]