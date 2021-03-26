from django.http import JsonResponse
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from userprofile.models import Userprofile
from friendrequest.serializers.friendserialzier import Friend_serializer

from friendrequest.models import FriendRequest
from friendrequest.permissions import IsUserOrReadOnly, IsSenderReceiverOrReadOnly


class CreateFriendship(CreateAPIView):
    serializer_class = Friend_serializer
    queryset = Userprofile.objects.all()
    lookup_url_kwarg = 'user_id'
    permission_classes = [IsAuthenticated & IsUserOrReadOnly]

    def create(self, request, *args, **kwargs):
        sender = request.user.userprofile
        receiver = self.get_object
        if sender == receiver:
            return JsonResponse({'detail': 'no hedonism!'})

        friend_request = FriendRequest(sender=sender, receiver=receiver)
        friend_request.save()
        return Response(self.get_serializer(friend_request).data)


class GetPatchDeleteFriendRequest(RetrieveUpdateDestroyAPIView):
    queryset = FriendRequest.objects.all()
    serializer_class = Friend_serializer
    lookup_url_kwarg = 'friend_request_id'
    permission_classes = [IsAuthenticated & IsSenderReceiverOrReadOnly]
