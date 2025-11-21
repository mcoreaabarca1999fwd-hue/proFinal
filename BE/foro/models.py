from django.db import models

# Create your models here.
class EtiquetaForo(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)

class Publicacion(models.Model):
    Usuario = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)
    EtiquetaForo = models.ForeignKey(EtiquetaForo, on_delete=models.CASCADE, null=True, blank=True)
    titulo = models.CharField(max_length=200)
    contenido = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)

class Comentario(models.Model):
    Publicacion = models.ForeignKey(Publicacion, on_delete=models.CASCADE)
    Usuario = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)
    contenido = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)

class Reaccion(models.Model):
    usuario = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)
    tipo = models.CharField(max_length=20, choices=[('me_gusta', 'Me gusta'), ('me_encanta', 'Me encanta')])
    fecha = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('usuario', 'publicacion')