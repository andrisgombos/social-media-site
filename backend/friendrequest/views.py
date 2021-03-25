# from django.shortcuts import render

# Create your views here.
from rest_framework.generics import CreateAPIView

from userprofile.models import Userprofile


class Create_friendship(CreateAPIView):
    serializer_class = Friend_serializer
    queryset = Userprofile.objects.all()

    def create(self, request, *args, **kwargs):
        sender = request.user.username
        receiver = self.get_object
        friend_request =