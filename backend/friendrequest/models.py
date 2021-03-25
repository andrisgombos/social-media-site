from django.db import models

# Create your tests here.
from userprofile.models import Userprofile


class FriendRequest(models.Model):

    CHOICES = [('A', 'Accepted'), ('R', 'Rejected'), ('P', 'Pending')]

    status = models.CharField(max_length=1, default='P', choices=CHOICES)

    sender = models.ForeignKey(to=Userprofile, on_delete=models.CASCADE, related_name='sender')
    receiver = models.ForeignKey(to=Userprofile, on_delete=models.CASCADE, related_name='receiver')

    resolved_time = models.DateTimeField(auto_now=True)
