
from django.db import models
from django.contrib.auth.models import User



class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6)

    def str(self):
        return self.user.username