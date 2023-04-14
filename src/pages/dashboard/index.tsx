import type { GetServerSideProps, NextPage } from "next";

import AnnouncementBanner from "~/components/AnnouncementBanner";
import CardComponent from "~/components/CardComponent";
import { getServerAuthSession } from "~/server/auth";

const Dashboard: NextPage = () => {
  return (
    <>
      <div className="mt-36 min-h-screen px-8">
        <div className="text-4xl font-bold">Upcoming Events</div>
        <div className="grid grid-cols-1 gap-y-6 pt-4 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
      <AnnouncementBanner />
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context);

  if (!session?.user.id) {
    return { redirect: { destination: "/login" }, props: {} };
  }
  return { props: {} };
};
