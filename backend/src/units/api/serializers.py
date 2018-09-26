from rest_framework import serializers

from units.models import Unit, Like
from rest_framework.response import Response


class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = ('id', 'title', 'description')


class LikeSerializer(serializers.ModelSerializer):

    number_of_records_like = Like.objects.filter().count()

    class Meta:
        model = Like
        fields = ('unit_movie', 'user')

    Response(number_of_records_like)
