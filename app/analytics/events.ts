export enum AnalyticsEventNames {
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT",
  SIGNED_UP = "SIGNED_UP",
  WORKSPACE_DOMAIN_ADDED = "WORKSPACE_DOMAIN_ADDED",
  WORKSPACE_DOMAIN_DELETED = "WORKSPACE_DOMAIN_DELETED",
  WORKSPACE_MEMBER_DEACTIVATION_UPDATED = "WORKSPACE_MEMBER_DEACTIVATION_UPDATED",
  WORKSPACE_MEMBER_INVITED = "WORKSPACE_MEMBER_INVITED",
}

export type AnalyticsEvent =
  | LoggedInEvent
  | LoggedOutEvent
  | SignedUpEvent
  | WorkspaceDomainAddedEvent
  | WorkspaceDomainDeletedEvent
  | WorkspaceMemberDeactivationUpdatedEvent
  | WorkspaceMemberInvitedEvent;

export type LoggedInEvent = {
  name: AnalyticsEventNames.LOGGED_IN;
  data: {
    email: string;
  };
};

export type LoggedOutEvent = {
  name: AnalyticsEventNames.LOGGED_OUT;
  data: {};
};

export type SignedUpEvent = {
  name: AnalyticsEventNames.SIGNED_UP;
  data: {
    email: string;
  };
};

export type WorkspaceDomainAddedEvent = {
  name: AnalyticsEventNames.WORKSPACE_DOMAIN_ADDED;
  data: {
    domain: string;
  };
};

export type WorkspaceDomainDeletedEvent = {
  name: AnalyticsEventNames.WORKSPACE_DOMAIN_DELETED;
  data: {
    domain: string;
  };
};

export type WorkspaceMemberDeactivationUpdatedEvent = {
  name: AnalyticsEventNames.WORKSPACE_MEMBER_DEACTIVATION_UPDATED;
  data: {
    profileId: string;
    isDeactivated: boolean;
  };
};

export type WorkspaceMemberInvitedEvent = {
  name: AnalyticsEventNames.WORKSPACE_MEMBER_INVITED;
  data: {
    email: string;
  };
};
