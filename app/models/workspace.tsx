import { Color } from "@/models/color";
import { Profile } from "@/models/profile";

export type Workspace = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  isSetupComplete: boolean;
  avatarColor: Color;
  avatarImage: string;
  inviteLinkId: string;
  inviteLinkEnabled: boolean;
  numProfiles: number;
};

export type WorkspaceAllowedEmailDomain = {
  id: string;
  domain: string;
  createdAt: string;
};

export type WorkspaceInviteRecord = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  accepted: boolean;
  sender: Profile["id"];
};

export type WorkspaceAPIKey = {
  id: string;
  key?: string;
  createdAt: string;
  label: string;
};

export class WorkspaceUtils {}
