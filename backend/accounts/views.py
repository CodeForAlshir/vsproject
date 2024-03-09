from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Profile
from .serializer import UserSerializer, MyTokenObtainPairSerializer, UserSerializerWithToken
from .utils import generate_otp



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET', 'POST'])
def get_user(request):
    if request.method == 'GET':
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    elif request.method == 'POST':
        return Response({'message': 'POST request received'})

@api_view(['POST'])
def register(request):
    data = request.data
    username = data.get('username')
    email = data.get('email')


    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create(
        username=username,
        email=email,
        password=make_password(data.get('password')),
        is_active=False
    )
    
    otp = generate_otp()
    profile = Profile.objects.create(user=user, otp=otp) 
    send_mail(
        'OTP Verification',
        f'OTP: {otp}',
        'email@example.com',
        [email],
        fail_silently=False,
    )

    serializer = UserSerializerWithToken(user, many=False)
    response_data = serializer.data
    response_data['user_id'] = user.id  
    return Response(response_data, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def verify_otp(request):
    data = request.data
    user_id = data.get('user_id')
    otp_entered = data.get('otp')
    
    user = User.objects.get(id=user_id)
    profile = Profile.objects.get(user=user)

    if user.is_active:
        return Response({'error': 'User is already verified'}, status=status.HTTP_400_BAD_REQUEST)

    if profile.otp == otp_entered:
        user.is_active = True
        user.save()
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    else:
        return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def resend_otp(request):
    data = request.data
    user_id = data.get('user_id')
    
    user = User.objects.get(id=user_id)
    profile = Profile.objects.get(user=user)

    if user.is_active:
        return Response({'error': 'User is already verified'}, status=status.HTTP_400_BAD_REQUEST)
    
    otp = generate_otp()
    profile.otp = otp
    profile.save()
    
    send_mail(
        'OTP Verification',
        f'OTP: {otp}',
        'email@example.com',
        [user.email],
        fail_silently=False,
    )