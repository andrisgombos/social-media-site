# Generated by Django 3.1 on 2021-03-25 20:23

from django.db import migrations, models
import registration.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(default=registration.models.code_generator, max_length=6)),
                ('code_used', models.BooleanField(default=False)),
            ],
        ),
    ]
