import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-5">
      <Link href="/" className="text-4xl font-bold text-white">
        Oh Geez
      </Link>
    </header>
  );
};
