# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from units.models import Unit, Like
from .serializers import UnitSerializer, LikeSerializer
from rest_framework.generics import ListAPIView

# class UnitListView(ListAPIView):
#     queryset = Unit.objects.all()
#     serializer_class = UnitSerializer


# class UnitDetailView(RetrieveAPIView):
#     queryset = Unit.objects.all()
#     serializer_class = UnitSerializer


# class UnitCreateView(CreateAPIView):
#     queryset = Unit.objects.all()
#     serializer_class = UnitSerializer


# class UnitUpdateView(UpdateAPIView):
#     queryset = Unit.objects.all()
#     serializer_class = UnitSerializer


# class UnitDeleteView(DestroyAPIView):
#     queryset = Unit.objects.all()
#     serializer_class = UnitSerializer

from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from . import serializers


class UnitViewSet(viewsets.ModelViewSet):
    serializer_class = UnitSerializer
    queryset = Unit.objects.all()


# class LikeViewSet(viewsets.ModelViewSet):
#     serializer_class = LikeSerializer

#     def get_queryset(self):
#         user = self.request.user
#         queryset = Like.objects.filter(user=user)
#         return queryset
from rest_framework.views import APIView


class LikeApiView(APIView):
    serializer_class = serializers.LikeSerializer

    def get(self, request, filmID, format=None):
        likes = Like.objects.filter(unit_movie=filmID).count()
        an_apiview = [
            likes,
        ]

        return Response({'message': 'Hello!', 'an_apiview': an_apiview})


class LikeListView(APIView):
    serializer_class = serializers.LikeSerializer

    def get(self, request):
        number_of_units = Unit.objects.filter().count()
        i = 1
        an_apiview = []
        while i <= number_of_units:
            likes = Like.objects.filter(unit_movie=i).count()
            print(likes)
            an_apiview.append(likes)
            print(an_apiview)
            i = i + 1
        return Response({'message': 'Hello2!', 'an_apiview': an_apiview})
