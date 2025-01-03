import type { GetServerSideProps } from "next";

export default function DashboardsPage() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    redirect: {
      destination: `/${params?.workspaceSlug}/facts`,
      permanent: true,
    },
  };
};
