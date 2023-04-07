import Image from "next/image";
import Link from "next/link";

interface cardComponentProps {
  image?: string;
  date?: string; // can change this later
  title?: string;
  description?: string;
}

const CardComponent = ({
  image,
  date,
  title,
  description,
}: cardComponentProps) => {
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
        <div className="block text-xs text-gray-500">10th Oct 2022</div>

        <Link href="/">
          <h3 className="mt-0.5 text-lg text-gray-900">Example Card</h3>
        </Link>

        <div className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </div>
      </div>
    </article>
  );
};

export default CardComponent;
