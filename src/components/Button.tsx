import Link from "next/link";

interface ButtonProps {
  label: string;
  link?: string;
}

const Button = ({ label, link = "" }: ButtonProps) => {
  return (
    <>
      {link === "" ? (
        <div className="inline-block rounded border border-orange bg-orange px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black">
          {label}
        </div>
      ) : (
        <Link href={link}>
          <div className="inline-block rounded border border-orange bg-orange px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black">
            {label}
          </div>
        </Link>
      )}
    </>
  );
};

export default Button;