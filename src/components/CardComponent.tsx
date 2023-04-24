import Image from "next/image";

interface CardComponentProps {
  image?: string;
  date?: string; // can change this later
  title?: string;
  description?: string;
}

const CardComponent = ({
  image = "/placeholder2.jpeg",
  title = "Example",
  date,
  description,
}: CardComponentProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <Image
        alt="example image"
        src={image}
        className="h-56 w-full object-cover"
        width={1000}
        height={1000}
      />

      <div className="bg-white p-4 sm:p-6">
        {date && <div className="block text-xs text-gray-500">{date}</div>}

        <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>

        {description && (
          <div className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
            {description}
          </div>
        )}
      </div>
    </article>
  );
};

export default CardComponent;
