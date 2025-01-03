import React from "react";

import Document, { Head, Html, Main, NextScript } from "next/document";

import { COMPANY_DESCRIPTION, COMPANY_NAME } from "@/lib/constants";

export default class StructDocument extends Document {
  render() {
    return (
      <Html lang={"en"} className="overflow-x-hidden w-full">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={"/apple-touch-icon.png"}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href={"/favicon-48x48.png"}
          />

          <link rel="manifest" href={"/site.webmanifest"} />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#ffffff"></meta>

          <meta name="description" content={COMPANY_DESCRIPTION} />
          <meta name="og:title" content={COMPANY_NAME} />
          <meta name="og:description" content={COMPANY_DESCRIPTION} />
          <meta name="og:url" content={"https://structhq.com"} />
          <meta name="og:site_name" content={COMPANY_NAME} />
          <meta name="og:type" content="website" />
          <meta name="og:locale" content="en_US" />
          <meta name="og:image:width" content="1024" />
          <meta name="og:image:height" content="1024" />
        </Head>
        <body className="bg-white min-h-screen overflow-x-hidden text-base text-gray-12 select-none font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
