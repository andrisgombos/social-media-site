from django.contrib.auth import get_user_model
from django.urls import path

from friendrequest.views import CreateFriendship, GetPatchDeleteFriendRequest

User = get_user_model()

urlpatterns = [
    path('request/<int:user_id>/', CreateFriendship.as_view()),
    path('requests/<int:friend_request_id>/', GetPatchDeleteFriendRequest.as_view()),
]
