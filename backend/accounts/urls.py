from django.urls import path
from .views import *

urlpatterns = [
    path('', get_user, name='profile'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('register/', register, name='register'),
    path('verify/', verify_otp, name='verify_otp'),
    path('resend/', resend_otp, name='resend_otp'), 

]