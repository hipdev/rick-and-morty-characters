import CountViewClient from "@/components/common/CountViewClient";
import { BigCard } from "@/design-system/index";
import Link from "next/link";

interface Params {
  params: {
    id: string;
  };
}

export default async function Page({ params: { id } }: Params) {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character: Character = await data.json();

  return (
    <div className="bg-zinc-800">
      <div
        style={{
          height: "calc(100vh - 164px)",
        }}
        className="container mx-auto max-w-lg bg-zinc-800 pt-10"
      >
        <Link
          href="/"
          className="mb-4 inline-block rounded-sm border border-white/70 px-3 py-0.5 text-lg text-white/90 transition-colors hover:border-white hover:text-white"
        >
          Go Back
        </Link>
        <BigCard character={character} />
      </div>
      <CountViewClient character={character} />
    </div>
  );
}
