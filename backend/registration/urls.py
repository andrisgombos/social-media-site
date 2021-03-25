from django.urls import path

from .views import RegistrationApiView, Validation

urlpatterns = [
    path('', RegistrationApiView.as_view()),
    path('validation/', Validation.as_view()),
]
