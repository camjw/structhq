import { MetadataRoute } from "next";

import { COMPANY_DESCRIPTION, COMPANY_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_NAME,
    short_name: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      { src: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      {
        src: "web-app-manifest-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/web-app-manifest-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
