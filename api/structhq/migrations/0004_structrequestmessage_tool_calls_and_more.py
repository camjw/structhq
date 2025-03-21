# Generated by Django 5.1 on 2025-01-01 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('structhq', '0003_alter_structrequestmessage_request'),
    ]

    operations = [
        migrations.AddField(
            model_name='structrequestmessage',
            name='tool_calls',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='structrequestmessage',
            name='message_type',
            field=models.TextField(choices=[('user', 'User'), ('assistant', 'Assistant'), ('assistant_tool_response', 'Assistant Tool Response'), ('error', 'Error')]),
        ),
    ]
