import CountViewClient from "@/components/common/CountViewClient";
import ModalClient from "@/components/common/ModalClient";
import { BigCard } from "@/design-system/index";

interface Params {
  params: {
    id: string;
  };
}

export default async function PhotoModal({ params: { id } }: Params) {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  const character: Character = await data.json();
  return (
    <ModalClient>
      <div className="mx-auto max-w-lg">
        <BigCard character={character} />
        <CountViewClient character={character} />
      </div>
    </ModalClient>
  );
}
