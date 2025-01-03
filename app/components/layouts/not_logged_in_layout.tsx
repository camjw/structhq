import React from "react";

type NotLoggedInLayoutProps = {
  children: React.ReactNode;
};

export default function NotLoggedInLayout({
  children,
}: NotLoggedInLayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-2">
      <main className="flex-1 w-full relative">{children}</main>
    </div>
  );
}

NotLoggedInLayout.getLayout = (page: React.ReactNode) => (
  <NotLoggedInLayout>{page}</NotLoggedInLayout>
);
