
from django.conf import settings
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

User = settings.AUTH_USER_MODEL


class Userprofile(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='userprofile', blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    location = models.CharField(max_length=255, blank=True)
    phone = models.CharField(max_length=255, blank=True)
    about = models.TextField(blank=True)
    hobbies = models.TextField(blank=True)

    friend = models.ManyToManyField(
        to='self',
        related_name='my_friend',
        blank=True,
        symmetrical=True
    )

    i_follow = models.ManyToManyField(
        to='self',
        related_name='my_followers',
        blank=True,
        symmetrical=False
    )

    changed_when = models.DateTimeField(auto_now=True)
    created_when = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.id}: profile from {self.user.username}'

    @receiver(post_save, sender=User)
    def create_registration_profile(sender, instance, **kwargs):
        profile, created = Userprofile.objects.get_or_create(user=instance)
        if created:
            profile.save()
