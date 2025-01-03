import { Workspace } from "@/models/workspace";

const NOTION_OAUTH_CALLBACK_URL = `${process.env.NEXT_PUBLIC_APP_URL}/notion/oauth/callback`;

export function buildNotionOAuthAuthorizationUrl(workspace: Workspace) {
  const state = JSON.stringify({
    workspaceId: workspace.id,
    redirectUri: NOTION_OAUTH_CALLBACK_URL,
  });

  const NOTION_OAUTH_AUTHORIZATION_URL = `https://api.notion.com/v1/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_NOTION_CLIENT_ID}&response_type=code&owner=user&redirect_uri=${encodeURIComponent(NOTION_OAUTH_CALLBACK_URL)}&state=${encodeURIComponent(state)}`;

  return NOTION_OAUTH_AUTHORIZATION_URL;
}
