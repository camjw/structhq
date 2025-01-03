import React from "react";

import posthog from "posthog-js";

import { AnalyticsEvent } from "./events";

export const AnalyticsInitializedContext = React.createContext<boolean>(false);

type JuneProviderProps = {
  children: React.ReactNode;
};

export function AnalyticsProvider({ children }: JuneProviderProps) {
  const [isAnalyticsInitialized, setAnalyticsInitialized] =
    React.useState<boolean>(false);

  const apiKey = process.env.NEXT_PUBLIC_JUNE_API_KEY as string;

  React.useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV !== "production") {
      return;
    }

    const hostname = window.location.protocol + "//" + window.location.host;

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY as string, {
      api_host: `${hostname}/ingest`,
    });

    setAnalyticsInitialized(true);
  }, []);

  return (
    <AnalyticsInitializedContext.Provider value={isAnalyticsInitialized}>
      {children}
    </AnalyticsInitializedContext.Provider>
  );
}

type IdentifyTraits = {
  email?: string;
  preferredName?: string;
  fullName?: string;
};

type GroupTraits = {
  name?: string;
};

export default function useAnalytics() {
  const isAnalyticsInitialized = React.useContext(AnalyticsInitializedContext);

  const track = React.useCallback(
    (event: AnalyticsEvent) => {
      if (!isAnalyticsInitialized) {
        if (process.env.NEXT_PUBLIC_ENV === "production") {
          console.info("Analytics not loaded when it should be, cannot track");
        }

        // Useful when testing analytics in development
        if (process.env.NEXT_PUBLIC_ENV === "development") {
          console.log("Analytics Event: ", {
            name: event.name,
            data: event.data,
          });
        }
      } else {
        posthog.capture(event.name, event.data);
      }
    },
    [isAnalyticsInitialized],
  );

  const identify = React.useCallback(
    (userId: string, traits: IdentifyTraits) => {
      if (!isAnalyticsInitialized) {
        if (process.env.NEXT_PUBLIC_ENV === "production") {
          console.info(
            "Analytics not loaded when it should be, cannot identify",
          );
        }
      } else {
        posthog.identify(userId, traits);
      }
    },
    [isAnalyticsInitialized],
  );

  const group = React.useCallback(
    (companyId: string, traits: GroupTraits) => {
      if (!isAnalyticsInitialized) {
        if (process.env.NEXT_PUBLIC_ENV === "production") {
          console.info("Analytics not loaded when it should be, cannot group");
        }
      } else {
        posthog.group("company", companyId, traits);
      }
    },
    [isAnalyticsInitialized],
  );

  return {
    track,
    identify,
    group,
  };
}
