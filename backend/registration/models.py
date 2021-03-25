import random

from django.db import models

# Create your models here.
from userprofile.models import Userprofile


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration(models.Model):
    code = models.CharField(max_length=6, default=code_generator)
    userprofile = models.OneToOneField(
        to=Userprofile,
        related_name='auth_code',
        on_delete=models.CASCADE
    )
    code_used = models.BooleanField(default=False)

    def __str__(self):
        return f'Registration profile for: {self.id}: {self.userprofile.user.username}'
