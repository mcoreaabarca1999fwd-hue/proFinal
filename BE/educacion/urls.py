from django.urls import path
from .views import ArticEduCreateView, CategEduCreateView

urlpatterns = [
    path('articulo/', ArticEduCreateView.as_view()),
    path('categoria-articulo/', CategEduCreateView.as_view())
]