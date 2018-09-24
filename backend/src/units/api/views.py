# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from units.models import Unit
from .serializers import UnitSerializer


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


class UnitViewSet(viewsets.ModelViewSet):
    serializer_class = UnitSerializer
    queryset = Unit.objects.all()
