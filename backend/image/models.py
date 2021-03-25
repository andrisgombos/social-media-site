from django.db import models

# Create your models here.
from comment.models import Post


class Image(models.Model):
    picture = models.ImageField()
    post = models.ForeignKey(
        to=Post,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='picture'
    )
