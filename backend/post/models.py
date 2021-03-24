from django.db import models

# Create your models here.
from userprofile.models import Userprofile


class Post(models.Model):
    content = models.CharField(
        max_length=1000,
        blank=True,
        null=True
    )
    owner = models.ForeignKey(
        to=Userprofile,
        related_name='my_posts',
        on_delete=models.CASCADE
    )

    liked_by = models.ManyToManyField(
        to=Userprofile,
        related_name='userprofile',
        blank=True
    )

    changed_when = models.DateTimeField(auto_now=True)
    created_when = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.id}: {self.owner.user.username}'