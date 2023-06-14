import Image from "next/image";

// import defaultPicture from '../../../public/visit-icon.jpg'
import { Status, Title } from "../..";
import { ReactNode } from "react";

type ValuesProps = {
  title: string;
  value: keyof Character;
}[];

type LocationProps = {
  title: string;
  value: string;
}[];

const characterValues: ValuesProps = [
  { title: "Status", value: "status" },
  { title: "Species", value: "species" },
  { title: "Type", value: "type" },
  { title: "Gender", value: "gender" },
];

const locationValues: LocationProps = [
  { title: "Name", value: "name" },
  { title: "Type", value: "type" },
  { title: "Dimension", value: "dimension" },
  { title: "Gender", value: "gender" },
];

export const BigCard = async ({ character }: { character: Character }) => {
  const locationData = character?.location?.url
    ? await fetch(character.location.url || "").then((res) => res.json())
    : null;
  const originData = character?.origin?.url
    ? await fetch(character.origin.url || "").then((res) => res.json())
    : null;

  return (
    <div className="overflow-hidden rounded-sm">
      <div className="relative h-[24rem] w-full">
        <Image
          blurDataURL="/placeholder.png"
          placeholder="blur"
          src={character.image}
          width={800}
          height={800}
          alt={`${character.name} image`}
          className="h-full w-full object-cover"
          draggable={false}
          priority
        />

        <span className="absolute bottom-3 right-3 rounded-sm bg-white/90 px-3 py-0.5 text-black">
          {character.species}
        </span>
      </div>

      <div className="bg-zinc-900 px-7 py-6">
        <div className="flex items-center gap-2">
          <Title size="xxxlarge">{character.name}</Title>

          <Status status={character.status} />
        </div>

        <div className="grid grid-cols-2 gap-x-5">
          {characterValues.map(({ title, value }) => (
            <div key={value} className="flex justify-between text-white">
              <strong>{title}</strong>
              <span className="text-white/80">
                {(character[value] as ReactNode) || "Undefined"}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-7 border-t border-t-white/20 pt-3">
          {/* Origin */}
          <div>
            <Title size="large" className="mb-2">
              Origin
            </Title>
            {originData ? (
              locationValues.map(({ title, value }) => (
                <div
                  key={title}
                  className="flex justify-between gap-3 text-white"
                >
                  <strong>{title}</strong>
                  <span
                    title={originData[value]}
                    className="line-clamp-1 text-white/80"
                  >
                    {originData[value] || "unknown"}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-white">Unknown origin</p>
            )}
          </div>

          {/* Location */}
          <div>
            <Title size="large" className="mb-2">
              Location
            </Title>
            {locationData ? (
              locationValues.map(({ title, value }) => (
                <div
                  key={title}
                  className="flex justify-between gap-3 text-white"
                >
                  <strong>{title}</strong>
                  <span
                    title={locationData[value]}
                    className="line-clamp-1 text-white/80"
                  >
                    {locationData[value] || "unknown"}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-white">Unknown location</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
