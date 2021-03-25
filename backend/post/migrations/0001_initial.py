# Generated by Django 3.1 on 2021-03-25 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(blank=True, max_length=1000, null=True)),
                ('changed_when', models.DateTimeField(auto_now=True)),
                ('created_when', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]