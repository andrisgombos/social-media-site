from rest_framework.permissions import BasePermission


class IsUserOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method == 'GET':
            return True
        return obj != request.user


class IsSenderReceiverOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method == 'GET':
            return True
        elif request.method == 'PATCH':
            return obj.receiver == request.user
        return obj.sender == request.user
