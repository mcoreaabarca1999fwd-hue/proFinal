from django.db import models

# Create your models here.

class CategoriaEducacion(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)

class ArticuloEducativo(models.Model):
    titulo = models.CharField(max_length=200)
    contenido = models.TextField()
    categoria = models.ForeignKey(CategoriaEducacion, on_delete=models.CASCADE, related_name='articulos')
    autor = models.ForeignKey("usuarios.Usuario", on_delete=models.SET_NULL, null=True, blank=True)
    fecha_publicacion = models.DateField(auto_now_add=True)
    imagen = models.ImageField(upload_to='educacion/articulos/', null=True, blank=True)