from rest_framework import serializers

from friendrequest.models import FriendRequest


class Friend_serializer(serializers.ModelSerializer):

    class Meta:
        model = FriendRequest
        fields = '__all__'
