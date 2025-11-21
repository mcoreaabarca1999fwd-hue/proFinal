from django.db import models


# Create your models here.
class Ciclo(models.Model):
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    duracion_promedio = models.IntegerField()
    duracion_menstruacion = models.IntegerField()
    sintomas = models.TextField()
    usuario = models.ForeignKey("usuarios.Usuario",on_delete=models.CASCADE)

class RegistroSintoma(models.Model):
    usuario = models.ForeignKey("usuarios.Usuario", on_delete=models.CASCADE, related_name='sintomas')
    fecha = models.DateField()
    tipo = models.CharField(max_length=100)
    intensidad = models.PositiveSmallIntegerField(default=1)
    notas = models.TextField(blank=True)