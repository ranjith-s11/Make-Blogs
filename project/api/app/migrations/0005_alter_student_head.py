# Generated by Django 4.1.1 on 2023-07-15 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_rename_course_student_memory_student_head'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='head',
            field=models.CharField(default='', max_length=100),
        ),
    ]