from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import Usuario
from .serializers import UsuarioSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

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
