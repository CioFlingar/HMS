from django.urls import path, include
from rest_framework import routers
from .views import DepartmentViewSet

router = routers.DefaultRouter()
router.register(r'departments', DepartmentViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]