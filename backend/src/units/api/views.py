from rest_framework.generics import ListAPIView, RetrieveAPIView

from units.models import Unit
from .serializers import UnitSerializer


class UnitListView(ListAPIView):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer


class UnitDetailView(RetrieveAPIView):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer
