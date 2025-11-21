from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Usuario(AbstractUser):
    ROLES = (
    ("admin","ADMIN"),
    ("profesional","PROFESIONAL"),
    ("USUARIO","usuario"),
    ("MODERADOR","moderador")
    )
    fecha_nacimiento = models.DateField(null=False)
    rol = models.CharField(choices=ROLES,max_length=15,default="usuario",null=False)
    foto_perfil = models.TextField(null=True)
    bio = models.TextField(blank=True)


class PreferenciasSalud(models.Model):
    Usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    usa_anticonceptivos = models.BooleanField(default=False)
    promedio_ciclo = models.PositiveBigIntegerField(default=28)
    duracion_menstruacion = models.PositiveBigIntegerField(default=5)

