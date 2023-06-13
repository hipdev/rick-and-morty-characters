import CountViewClient from "@/components/common/CountViewClient";

interface Params {
  params: {
    id: string;
  };
}

export default async function Page({ params: { id } }: Params) {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character: Character = await data.json();

  console.log(character, "character");

  return (
    <div className="bg-zinc-800 main-wrapper min-h-screen">
      <p>{JSON.stringify(character)}</p>

      <CountViewClient character={character} />
    </div>
  );
}
