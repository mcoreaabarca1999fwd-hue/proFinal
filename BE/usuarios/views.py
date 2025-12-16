from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import Usuario
from .serializers import UsuarioSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated, AllowAny

class UsuarioCreateView(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioPorIdView(ListCreateAPIView):
    serializer_class = UsuarioSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        id_usuario = self.kwargs['id']
        return Usuario.objects.filter(id=id_usuario)


class UsuarioLogin(APIView):
    permission_classes = [AllowAny]
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')

        usuario = authenticate(username=username,password=password)

        if usuario is not None:
            token = RefreshToken.for_user(usuario).access_token
            return Response({
                'message': "Inicio exitoso",
                'id': usuario.id,
                'token': str(token)
            })
        else:
            return Response({
                'message': "Credenciales invalidas"
            })

from rest_framework.generics import DestroyAPIView

class EliminarUsuarioView(DestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    # permission_classes = [IsAuthenticated]
    lookup_field = 'id'

class EditarUsuarioView(APIView):
    def patch(self,request):
        id_usuario = request.data.get('id_usuario')
        username = request.data.get('username')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        email = request.data.get('email')
        password = request.data.get('password')
        rol = request.data.get('rol')
        bio = request.data.get('bio')

        try:
            usuario = Usuario.objects.get(id=id_usuario)

            if username:
                usuario.username = username
            if first_name:
                usuario.first_name = first_name
            if last_name:
                usuario.last_name = last_name
            if email:
                usuario.email = email
            if password:
                usuario.set_password(password)
            if rol:
                usuario.rol = rol
            if bio is not None:
                usuario.bio = bio
            usuario.save()
            return Response({
                'message': "Usuario actualizado exitosamente"
            })
        except Usuario.DoesNotExist:
            return Response({
                'message': "Usuario no encontrado"
            }, status=404)
        
