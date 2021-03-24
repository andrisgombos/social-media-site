from django.db import models

# Create your models here.
from post.models import Post
from userprofile.models import Userprofile


class Comment(models.Model):
    content = models.CharField(
        max_length=200,
        blank=True,
        null=True
    )

    created_by = models.ForeignKey(
        to=Userprofile,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='comments'
    )

    comment_on_post = models.ForeignKey(
        to=Post,
        on_delete=models.CASCADE,
        related_name='comments'
    )

    changed_when = models.DateTimeField(auto_now=True)
    created_when = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f' comment written by:{self.created_by}'
