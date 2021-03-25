from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
from django.core.mail import send_mail

from .models import Registration

from rest_framework.generics import GenericAPIView

from userprofile.serializers.UserSerializer import UserSerializer
from userprofile.models import Userprofile

User = get_user_model()


class RegistrationApiView(GenericAPIView):
    permission_classes = []
    #
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        new_user = User(email=email, username=email, is_active=False)
        new_user.save()
        new_profile = Userprofile(user=new_user)
        new_profile.save()
        registration = Registration(userprofile=new_profile)
        registration.save()

        send_mail(
            'Your Motion login code',
            f'Hello {new_user.username}, \nPlease use the following code to validate your email address and update your account: {registration.code}.\n'
            f'Thank you for joining the world of Motion',
            'joost.motion@gmail.com',
            [f'{new_user.email}'],
            fail_silently=False,
        )

        return Response(status=200)

class Validation(GenericAPIView):
    permission_classes = []
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        code = request.data['code']
        email = request.data['email']
        try:
            check_validation = Registration.objects.get(code=code, userprofile__user__email=email, code_used=False)
            check_validation.userprofile.user.username = request.data['username']
            check_validation.userprofile.user.first_name = request.data['first_name']
            check_validation.userprofile.user.last_name = request.data['last_name']
            check_validation.userprofile.user.set_password(request.data['password'])
            check_validation.code_used = True
            check_validation.userprofile.user.is_active = True
            check_validation.userprofile.user.save()
            check_validation.save()
            return Response(self.get_serializer(check_validation.userprofile.user).data)
        except ObjectDoesNotExist:
            return Response(status=404, data=f'This {code} is not valid with {email}')