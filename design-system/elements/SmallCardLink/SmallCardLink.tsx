import Image from "next/image";

import { Status, Title } from "../..";
import Link from "next/link";

export const SmallCardLink = ({ character }: { character: Character }) => {
  return (
    <Link
      href={`/view/${character.id}`}
      key={character.id}
      className="w-full overflow-hidden rounded-sm bg-zinc-900 opacity-80 shadow-md shadow-zinc-800 transition-opacity hover:opacity-100"
    >
      <div className="h-52 w-full">
        <Image
          src={character.image}
          width={600}
          height={600}
          alt={`${character.name} image`}
          draggable={false}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-zinc-900 px-4 py-3">
        <div className="line flex items-center gap-1">
          <Title size={"xlarge"} className="line-clamp-1">
            {character.name}
          </Title>

          <Status status={character.status} />
        </div>
        <p className="line-clamp-1 text-white/80">
          {character.type || "Geez, nothing here"}
        </p>
      </div>
    </Link>
  );
};
