from django.db import models


class Seguimiento(models.Model):
    seguidor = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE, related_name='siguiendo')
    seguido = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE, related_name='siguiendores')
    fecha = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('seguidor', 'seguido')


