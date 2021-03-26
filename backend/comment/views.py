from rest_framework.generics import ListCreateAPIView
from models import Comment
from serializers import CommentSerializer
from post.models import Post
from rest_framework.response import Response

class ListCreateComment(ListCreateAPIView):
    serializer_class = CommentSerializer
    queryset = Post.objects.all()

    def create(self, request, *args, **kwargs):
        post = self.get_object()
        comment = Comment(content=request.data['content'], userprofiles=request.user.user_profile, post=post)
        comment.save()
        return Response(self.get_serializer(comment).data)

    def list(self, request, *args, **kwargs):
        post = self.get_object()
        return Response(self.get_serializer(post.comments, many=True).data)

