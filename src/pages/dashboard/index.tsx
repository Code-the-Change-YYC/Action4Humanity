import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

import AnnouncementBanner from "~/components/AnnouncementBanner";
import CardComponent from "~/components/CardComponent";
import { getServerAuthSession } from "~/server/auth";

const LOREM_IPSUM_TEMP =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?";
const FILLER_DATE_TEMP = new Date(2023, 1).toDateString();

const Dashboard: NextPage = () => {
  // NOTE: this is for placeholder purposes, must remove
  const DUMMY_cards = Array(5)
    .fill(null)
    .map((_, i) => (
      <CardComponent
        key={i}
        description={LOREM_IPSUM_TEMP}
        date={FILLER_DATE_TEMP}
      />
    ));

  return (
    <>
      <div className="min-h-screen px-8">
        <div className="text-4xl font-bold">Upcoming Events</div>
        <div className="grid grid-cols-1 gap-y-6 pt-4 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
          {DUMMY_cards}
        </div>
        <div className="pt-4 text-4xl font-bold">Administration</div>
        <div className="grid grid-cols-1 gap-y-6 pt-4 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
          <Link href="/admin/allowlist">
            <CardComponent title="Email Allowlist" />
          </Link>
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
