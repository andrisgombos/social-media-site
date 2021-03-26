from rest_framework import serializers
from userprofile.serializers import UserSerializer
from models import Comment


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'content', 'user']
        read_only_fields = ['user']
