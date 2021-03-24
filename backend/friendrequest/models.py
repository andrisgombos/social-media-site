from django.db import models

# Create your tests here.
from backend.userprofile.models import Userprofile


class FriendRequest(models.Model):

    CHOICES = [('A', 'Accepted'), ('R', 'Rejected'), ('P', 'Pending')]

    status = models.CharField(max_length=1, default='P', choices=CHOICES)

    received_from = models.ForeignKey(to=Userprofile, on_delete=models.CASCADE, related_name='received_friend_requests')
    sent_to = models.ForeignKey(to=Userprofile, on_delete=models.CASCADE, related_name='sent_friend_requests')

    resolved_time = models.DateTimeField(auto_now=True)
