import { useEffect, useState } from "react";

export const useAuthedAppUrl = () => {
  const [authedAppUrl, setAuthedAppUrl] = useState<string | null>(null);

  useEffect(() => {
    const getAuthedAppUrlFromCookie = () => {
      if (typeof window === "undefined") return null;

      const cookies = document.cookie;

      if (!cookies || !cookies.includes(`authCookie=`)) return null;

      const cookie = cookies
        .split("; ")
        .find((row) => row.startsWith(`authCookie=`));

      if (!cookie) return null;

      return cookie.split("=")[1];
    };

    setAuthedAppUrl(getAuthedAppUrlFromCookie());
  }, []);

  return authedAppUrl;
};
