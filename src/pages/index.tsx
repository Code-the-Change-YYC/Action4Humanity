import Image from "next/image";
import Button from "~/components/Button";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
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
              Info
            </div>

            <div className="pt-3 text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </div>

            <div className="mt-4 md:mt-8">
              <Button label="Get Started" link="/sign-in" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
