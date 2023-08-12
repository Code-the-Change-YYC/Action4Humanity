import { useUser } from "@clerk/nextjs";
import type { Event } from "@prisma/client";
import type { NextPage } from "next";

import AnnouncementBanner from "~/components/AnnouncementBanner";
import CardComponent from "~/components/CardComponent";
import Navbar from "~/components/Navbar";
import { api } from "~/utils/api";

const Dashboard: NextPage = () => {
  const { user, isLoaded } = useUser();
  const { data: events } = api.dashboard.getAll.useQuery();

  return isLoaded ? (
    <>
      <Navbar />
      <div className="mt-4 px-8 text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome Back, {user?.fullName}!
        </h1>

        <p className="mt-1.5 text-sm text-gray-500">
          {"Let's sign up for an new event! 🎉"}
        </p>
      </div>
      <div className="mt-8 min-h-screen px-8">
        <div className="text-2xl font-semibold text-gray-900">
          Upcoming Events
        </div>
        <div className="grid grid-cols-1 gap-y-6 pt-4 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {events?.map((event: Event) => {
            return <CardComponent key={event.id} event={event} />;
          })}
        </div>
      </div>
      <AnnouncementBanner />
    </>
  ) : null;
};

export default Dashboard;
