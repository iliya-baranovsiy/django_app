from django.db import models


# Create your models here.

class UserTg(models.Model):
    tg_id = models.IntegerField()
    name = models.CharField(max_length=255)
    currency = models.IntegerField()


