# Generated by Django 3.1 on 2021-03-25 20:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('userprofile', '0001_initial'),
        ('registration', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='registration',
            name='userprofile',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='auth_code', to='userprofile.userprofile'),
        ),
    ]
