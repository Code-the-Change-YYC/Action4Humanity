import Image from "next/image";
import Link from "next/link";

import { type Event } from "@prisma/client";

interface cardComponentProps {
  event: Event;
}

const CardComponent = ({ event }: cardComponentProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <Image
        alt="example image"
        src="/placeholder2.jpeg"
        className="h-56 w-full object-cover"
        width={1000}
        height={1000}
      />

      <div className="bg-white p-4 sm:p-6">
        <div className="block text-xs text-gray-500">
          {event.date.toLocaleDateString()} {event.date.toLocaleTimeString()}
        </div>

        <Link href="/">
          <h3 className="mt-0.5 text-lg text-gray-900">{event.name}</h3>
        </Link>

        <div className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
          {event.description}
        </div>
      </div>
    </article>
  );
};

export default CardComponent;
