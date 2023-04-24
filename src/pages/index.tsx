import type { NextPage } from "next";
import Image from "next/image";

import Button from "~/components/Button";

const Home: NextPage = () => {
  return (
    <>
      <div className="overflow-hidden bg-gray-50 p-6 pt-24 sm:grid sm:grid-cols-2">
        <div>
          <Image
            alt="Placeholder"
            src="/placeholder.jpg"
            className="h-56 w-full rounded-lg object-cover sm:h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl sm:text-left">
            <div className="text-3xl font-bold text-gray-900 md:text-3xl">
              Welcome!
            </div>

            <div className="pt-3 text-gray-500 md:mt-4 md:block">
              Welcome to Action4Humanity&apos;s redeveloped volunteer dashboard.
              Login to the system using the Google email you&apos;ve registered
              with Action4Humanity and find all volunteering related events,
              announcements, and news in just one place. If you&apos;re unable
              to sign in and access the dashboard please reach out to an
              administrator.
            </div>

            <div className="mt-4 md:mt-8">
              <Button label="Login" link="/login" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
