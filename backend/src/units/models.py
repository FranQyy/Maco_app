from django.db import models
from django.conf import settings


class Unit(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title


class Like(models.Model):
    unit_movie = models.ForeignKey('Unit', on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)

    def __str__(self):
        return str(self.unit_movie) + str(self.user)
