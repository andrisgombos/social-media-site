from django.http import JsonResponse
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from userprofile.models import Userprofile
from friendrequest.serializers.friendserialzier import Friend_serializer

from backend.friendrequest.models import FriendRequest


class Create_friendship(CreateAPIView):
    serializer_class = Friend_serializer
    queryset = Userprofile.objects.all()

    def create(self, request, *args, **kwargs):
        sender = request.user.userprofile
        receiver = self.get_object
        if sender == receiver:
            return JsonResponse({'detail': 'no hedonism!'})

        friend_request = FriendRequest(sender=sender, receiver=receiver)
        friend_request.save()
        return Response(self.get_serializer(friend_request).data)
