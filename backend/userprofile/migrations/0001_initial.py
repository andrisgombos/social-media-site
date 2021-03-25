<<<<<<< HEAD
# Generated by Django 3.1 on 2021-03-25 09:35
=======
# Generated by Django 3.1 on 2021-03-25 08:39
>>>>>>> c84e6a8fc055e7a0be38e77471247e5874438445

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Userprofile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='avatars/')),
                ('location', models.CharField(blank=True, max_length=255)),
                ('phone', models.CharField(blank=True, max_length=255)),
                ('about', models.TextField(blank=True)),
                ('hobbies', models.TextField(blank=True)),
                ('changed_when', models.DateTimeField(auto_now=True)),
                ('created_when', models.DateTimeField(auto_now_add=True)),
                ('friend', models.ManyToManyField(blank=True, related_name='_userprofile_friend_+', to='userprofile.Userprofile')),
                ('i_follow', models.ManyToManyField(blank=True, related_name='following', to='userprofile.Userprofile')),
                ('my_followers', models.ManyToManyField(blank=True, related_name='followers', to='userprofile.Userprofile')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='userprofile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
