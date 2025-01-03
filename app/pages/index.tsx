import { Suspense } from "react";
import React from "react";

import { Workspace } from "@/models/workspace";
import { userCanJoinWorkspacesAtom, userWorkspacesAtom } from "@/state/user";
import { useRouter } from "next/router";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

import NotLoggedInLayout from "@/components/layouts/not_logged_in_layout";
import FullGrayScreen from "@/components/loading_states/full_gray_screen";
import OnboardingRouter from "@/components/onboarding/onboarding_router";

export default function Home() {
  const userWorkspaces = useRecoilValue(userWorkspacesAtom);

  return (
    <Suspense>
      <HomeInner userWorkspaces={userWorkspaces} />
    </Suspense>
  );
}

function HomeInner({ userWorkspaces }: { userWorkspaces: Workspace[] }) {
  const router = useRouter();

  const userCanJoinWorkspacesLoadable = useRecoilValueLoadable(
    userCanJoinWorkspacesAtom,
  );

  React.useEffect(() => {
    if (userWorkspaces.length === 0) {
      return;
    }

    router.replace(userWorkspaces[0].slug);
  }, [userWorkspaces, router]);

  if (
    userWorkspaces.length > 0 ||
    userCanJoinWorkspacesLoadable.state !== "hasValue"
  ) {
    return <FullGrayScreen />;
  }

  return (
    <OnboardingRouter
      userCanJoinWorkspaces={userCanJoinWorkspacesLoadable.contents}
    />
  );
}

Home.getLayout = NotLoggedInLayout.getLayout;
