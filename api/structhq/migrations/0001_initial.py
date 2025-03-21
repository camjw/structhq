# Generated by Django 5.1 on 2024-12-29 18:02

import django.contrib.postgres.fields
import django.db.models.deletion
import rest_framework.utils.encoders
import structhq.models.color
import structhq.models.fields.json_field
import structhq.models.fields.lowercase_fields
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChatBackendUsageRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('backend', models.TextField(choices=[('openai', 'OpenAI'), ('anthropic', 'Anthropic')])),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('prompt_tokens', models.IntegerField()),
                ('completion_tokens', models.IntegerField()),
                ('messages', models.JSONField()),
                ('completion', models.TextField()),
                ('metadata', models.JSONField()),
            ],
            options={
                'verbose_name': 'Chat Usage Record',
                'verbose_name_plural': 'Chat Usage Records',
                'ordering': ['-start_time'],
            },
        ),
        migrations.CreateModel(
            name='WorkflowField',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('title', models.TextField()),
                ('subtitle', models.TextField(blank=True, null=True)),
                ('explanation', models.TextField(blank=True, null=True)),
                ('required', models.BooleanField(default=False)),
                ('field_type', models.TextField(choices=[('short_text', 'Short Text'), ('long_text', 'Long Text'), ('date', 'Date'), ('select', 'Select'), ('multiselect', 'Multiselect'), ('number', 'Number'), ('boolean', 'Boolean'), ('url', 'Url')])),
                ('options_type', models.TextField(choices=[('model', 'Model'), ('values', 'Values')])),
                ('options_values', structhq.models.fields.json_field.JSONField(blank=True, encoder=rest_framework.utils.encoders.JSONEncoder, null=True)),
            ],
            options={
                'verbose_name': 'Workflow Field',
                'verbose_name_plural': 'Workflow Fields',
                'ordering': ['created_at'],
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('email', structhq.models.fields.lowercase_fields.LowercaseEmailField(max_length=512, unique=True)),
                ('is_email_verified', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_author', models.BooleanField(default=False)),
                ('is_demo', models.BooleanField(default=False)),
                ('default_full_name', models.TextField(blank=True, default='')),
                ('default_preferred_name', models.TextField(blank=True, default='')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('subscribe_to_changelog', models.BooleanField(default=False)),
                ('full_name', models.TextField(blank=True, default='')),
                ('preferred_name', models.TextField(blank=True, default='')),
                ('avatar_color', models.TextField(choices=[('gray', 'Gray'), ('slate', 'Slate'), ('red', 'Red'), ('orange', 'Orange'), ('amber', 'Amber'), ('yellow', 'Yellow'), ('lime', 'Lime'), ('green', 'Green'), ('jade', 'Jade'), ('teal', 'Teal'), ('cyan', 'Cyan'), ('sky', 'Sky'), ('blue', 'Blue'), ('indigo', 'Indigo'), ('violet', 'Violet'), ('purple', 'Purple'), ('plum', 'Plum'), ('pink', 'Pink'), ('crimson', 'Crimson')], default=structhq.models.color.Color.get_random_color)),
                ('avatar_image', models.ImageField(blank=True, null=True, upload_to='user_avatar_images')),
                ('job_title', models.TextField(blank=True, default='')),
                ('responsibilities', models.TextField(blank=True, default='')),
                ('goals', models.TextField(blank=True, default='')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('type', models.TextField(choices=[('google', 'Google')])),
                ('provider', models.TextField(choices=[('google', 'Google')])),
                ('provider_account_id', models.TextField()),
                ('refresh_token', models.TextField(blank=True, null=True)),
                ('access_token', models.TextField(blank=True, null=True)),
                ('expires_at', models.IntegerField(blank=True, null=True)),
                ('token_type', models.TextField(blank=True, null=True)),
                ('scope', models.TextField(blank=True, null=True)),
                ('id_token', models.TextField(blank=True, null=True)),
                ('session_state', models.TextField(blank=True, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='accounts', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'User Account',
                'verbose_name_plural': 'User Accounts',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Workflow',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('title', models.TextField()),
                ('subtitle', models.TextField(blank=True, null=True)),
                ('explanation', models.TextField(blank=True, null=True)),
                ('published_at', models.DateTimeField(blank=True, null=True)),
                ('unpublished_at', models.DateTimeField(blank=True, null=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='structhq.profile')),
            ],
            options={
                'verbose_name': 'Workflow',
                'verbose_name_plural': 'Workflows',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='AuditLogEvent',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('event_type', models.TextField(choices=[('created', 'Created'), ('updated', 'Updated'), ('deleted', 'Deleted'), ('published', 'Published'), ('unpublished', 'Unpublished')])),
                ('event_data', models.JSONField()),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='audit_events', to='structhq.profile')),
                ('object_workflow', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='audit_events', to='structhq.workflow')),
            ],
            options={
                'verbose_name': 'Audit Event',
                'verbose_name_plural': 'Audit Events',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='WorkflowFieldCondition',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('value', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), default=list, size=None)),
                ('requires', django.contrib.postgres.fields.ArrayField(base_field=models.UUIDField(), default=list, size=None)),
                ('field', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='conditions', to='structhq.workflowfield')),
            ],
            options={
                'verbose_name': 'Workflow Field Condition',
                'verbose_name_plural': 'Workflow Field Conditions',
                'ordering': ['created_at'],
            },
        ),
        migrations.CreateModel(
            name='WorkflowHook',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('title', models.TextField()),
                ('hook_type', models.TextField(choices=[('webhook', 'Webhook'), ('email', 'Email'), ('zendesk', 'Zendesk'), ('harri', 'Harri'), ('fourth', 'Fourth'), ('hubspot', 'Hubspot')], default='webhook')),
                ('endpoint', models.TextField(blank=True, null=True)),
                ('zendesk_tag', models.TextField(blank=True, null=True)),
                ('is_zendesk_integration_hook', models.BooleanField(default=False)),
                ('workflow', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hooks', to='structhq.workflow')),
            ],
            options={
                'verbose_name': 'Workflow Hook',
                'verbose_name_plural': 'Workflow Hooks',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='WorkflowOutcome',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('title', models.TextField()),
                ('explanation', models.TextField(blank=True, null=True)),
                ('workflow', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='outcomes', to='structhq.workflow')),
            ],
            options={
                'verbose_name': 'Workflow Outcome',
                'verbose_name_plural': 'Workflow Outcomes',
                'ordering': ['created_at'],
            },
        ),
        migrations.AddField(
            model_name='workflowfield',
            name='outcome',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fields', to='structhq.workflowoutcome'),
        ),
        migrations.CreateModel(
            name='WorkflowRequest',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('system_message', models.TextField(blank=True, null=True)),
                ('title', models.TextField(blank=True, null=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='structhq.profile')),
            ],
            options={
                'verbose_name': 'Workflow Request',
                'verbose_name_plural': 'Workflow Requests',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='WorkflowRequestMessage',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('content', models.JSONField()),
                ('message_type', models.TextField(choices=[('user_text', 'User Text'), ('assistant_text', 'Assistant Text'), ('assistant_tool_call', 'Assistant Tool Call'), ('assistant_tool_response', 'Assistant Tool Response')])),
                ('request', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='messages', to='structhq.workflowrequest')),
            ],
            options={
                'verbose_name': 'Workflow Request Message',
                'verbose_name_plural': 'Workflow Request Messages',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='WorkflowRequestTicketData',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('results', structhq.models.fields.json_field.JSONField(encoder=rest_framework.utils.encoders.JSONEncoder)),
                ('submitted_data', structhq.models.fields.json_field.JSONField(blank=True, encoder=rest_framework.utils.encoders.JSONEncoder, null=True)),
                ('submitted_at', models.DateTimeField(blank=True, null=True)),
                ('outcome', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='request_tickets', to='structhq.workflowoutcome')),
                ('request', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_tickets', to='structhq.workflowrequest')),
                ('submitted_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='submitted_tickets', to='structhq.profile')),
            ],
            options={
                'verbose_name': 'Workflow Request Ticket Data',
                'verbose_name_plural': 'Workflow Request Ticket Data',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='WorkflowRequestTicketHookResult',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('status_code', models.IntegerField()),
                ('response_data', structhq.models.fields.json_field.JSONField(encoder=rest_framework.utils.encoders.JSONEncoder)),
                ('hook', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hook_results', to='structhq.workflowhook')),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hook_results', to='structhq.workflowrequestticketdata')),
            ],
            options={
                'verbose_name': 'Workflow Request Ticket Hook Result',
                'verbose_name_plural': 'Workflow Request Ticket Hook Results',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='WorkflowResource',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('title', models.TextField()),
                ('description', models.TextField()),
                ('resource_file', models.FileField(blank=True, null=True, upload_to='workflow_resources')),
                ('resource_type', models.TextField(choices=[('pdf', 'Pdf'), ('csv', 'Csv')])),
                ('name_column', models.TextField(blank=True, null=True)),
                ('all_columns', models.JSONField(blank=True, null=True)),
                ('is_published', models.BooleanField(default=False)),
                ('owner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='workflow_resources', to='structhq.profile')),
            ],
            options={
                'verbose_name': 'Workflow Resource',
                'verbose_name_plural': 'Workflow Resources',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Workspace',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.TextField()),
                ('slug', structhq.models.fields.lowercase_fields.LowercaseTextField()),
                ('workos_organization_id', models.TextField(blank=True, null=True)),
                ('stripe_customer_id', models.TextField(blank=True, null=True)),
                ('url', models.URLField(default=None, null=True)),
                ('description', models.TextField(default=None, null=True)),
                ('is_setup_complete', models.BooleanField(default=False)),
                ('avatar_color', models.TextField(choices=[('gray', 'Gray'), ('slate', 'Slate'), ('red', 'Red'), ('orange', 'Orange'), ('amber', 'Amber'), ('yellow', 'Yellow'), ('lime', 'Lime'), ('green', 'Green'), ('jade', 'Jade'), ('teal', 'Teal'), ('cyan', 'Cyan'), ('sky', 'Sky'), ('blue', 'Blue'), ('indigo', 'Indigo'), ('violet', 'Violet'), ('purple', 'Purple'), ('plum', 'Plum'), ('pink', 'Pink'), ('crimson', 'Crimson')], default=structhq.models.color.Color.get_random_color)),
                ('avatar_image', models.ImageField(blank=True, null=True, upload_to='workspace_avatar_images')),
                ('invite_link_id', models.UUIDField(default=uuid.uuid4)),
                ('invite_link_enabled', models.BooleanField(default=True)),
                ('zendesk_subdomain', models.TextField(blank=True, null=True)),
                ('zendesk_api_key', models.TextField(blank=True, null=True)),
                ('zendesk_email', models.TextField(blank=True, null=True)),
                ('zendesk_last_synced_at', models.DateTimeField(blank=True, null=True)),
                ('members', models.ManyToManyField(related_name='workspaces', through='structhq.Profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='workflowrequestticketdata',
            name='workspace',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='workflow_request_tickets', to='structhq.workspace'),
        ),
        migrations.AddField(
            model_name='workflow',
            name='workspace',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='workflows', to='structhq.workspace'),
        ),
        migrations.AddField(
            model_name='profile',
            name='workspace',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profiles', to='structhq.workspace'),
        ),
        migrations.CreateModel(
            name='WorkspaceAPIKey',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('key', models.TextField()),
                ('label', models.TextField()),
                ('workspace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='api_keys', to='structhq.workspace')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='WorkspaceChatBackend',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.TextField()),
                ('provider', models.TextField(choices=[('openai', 'OpenAI'), ('anthropic', 'Anthropic')])),
                ('model', models.TextField()),
                ('api_key', models.TextField()),
                ('workspace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chat_backends', to='structhq.workspace')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='WorkspaceEmailDomain',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('domain', models.TextField()),
                ('workspace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='email_domains', to='structhq.workspace')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='WorkspaceInvite',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('email', structhq.models.fields.lowercase_fields.LowercaseEmailField(max_length=512, unique=True)),
                ('invite_url', models.TextField(unique=True)),
                ('accepted', models.BooleanField(default=False)),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sent_invites', to='structhq.profile')),
                ('workspace', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='invites', to='structhq.workspace')),
            ],
            options={
                'ordering': ['created_at'],
            },
        ),
        migrations.AddIndex(
            model_name='user',
            index=models.Index(fields=['email'], name='user_email'),
        ),
        migrations.AddConstraint(
            model_name='user',
            constraint=models.UniqueConstraint(fields=('email',), name='user_unique_email'),
        ),
        migrations.AddIndex(
            model_name='useraccount',
            index=models.Index(fields=['user'], name='user_account_user'),
        ),
        migrations.AddIndex(
            model_name='auditlogevent',
            index=models.Index(fields=['owner', 'object_workflow'], name='audit_log_workflow_idx'),
        ),
        migrations.AddIndex(
            model_name='workflowrequest',
            index=models.Index(fields=['owner'], name='workflow_request_owner'),
        ),
        migrations.AddIndex(
            model_name='workspace',
            index=models.Index(fields=['slug'], name='workspace_slug'),
        ),
        migrations.AddConstraint(
            model_name='workspace',
            constraint=models.UniqueConstraint(fields=('slug',), name='unique_workspace_slug'),
        ),
        migrations.AddIndex(
            model_name='profile',
            index=models.Index(fields=['workspace'], name='profile_workspace'),
        ),
        migrations.AddIndex(
            model_name='profile',
            index=models.Index(fields=['user'], name='profile_user'),
        ),
        migrations.AddConstraint(
            model_name='profile',
            constraint=models.UniqueConstraint(fields=('workspace', 'user'), name='unique_profile'),
        ),
        migrations.AddIndex(
            model_name='workspaceapikey',
            index=models.Index(fields=['workspace'], name='structhq_wo_workspa_3b886f_idx'),
        ),
        migrations.AddIndex(
            model_name='workspaceapikey',
            index=models.Index(fields=['key'], name='structhq_wo_key_387540_idx'),
        ),
        migrations.AddConstraint(
            model_name='workspaceapikey',
            constraint=models.UniqueConstraint(fields=('key',), name='unique_api_key'),
        ),
        migrations.AddConstraint(
            model_name='workspaceapikey',
            constraint=models.UniqueConstraint(fields=('workspace', 'label'), name='unique_workspace_api_key_label'),
        ),
        migrations.AddIndex(
            model_name='workspacechatbackend',
            index=models.Index(fields=['workspace'], name='structhq_wo_workspa_97de97_idx'),
        ),
        migrations.AddIndex(
            model_name='workspaceemaildomain',
            index=models.Index(fields=['workspace'], name='structhq_wo_workspa_bdcce2_idx'),
        ),
        migrations.AddIndex(
            model_name='workspaceemaildomain',
            index=models.Index(fields=['domain'], name='structhq_wo_domain_7d89a1_idx'),
        ),
        migrations.AddIndex(
            model_name='workspaceinvite',
            index=models.Index(fields=['email'], name='invited_email'),
        ),
    ]
