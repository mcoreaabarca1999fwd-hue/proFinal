from django.urls import path
from .views import SeguimientoCreateView

urlpatterns = [
    path('seguimiento/', SeguimientoCreateView.as_view()),
    
]