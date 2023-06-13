"use client";

import { SmallCardLink } from "@/design-system";
import fetcher from "@/lib/fetcher";
import useSWRInfinite from "swr/infinite";

export default function CharactersPaginationClient() {
  const { data, size, setSize } = useSWRInfinite(
    (index) => `https://rickandmortyapi.com/api/character?page=${index + 1}`,
    fetcher
  );

  const handleSize = () => {
    setSize(size + 1);
  };

  return (
    <>
      {data?.map((parent, index) =>
        parent?.results?.map((character: Character) => {
          // avoid first page, it's cached already
          if (index == 0) return;
          return <SmallCardLink character={character} key={character.id} />;
        })
      )}

      {data && data[data.length - 1].info.next == null ? (
        <p className="sm:cols-span-2 mt-5 text-center text-lg font-bold text-white md:col-span-3 2xl:col-span-4">
          You reached the end
        </p>
      ) : (
        <button
          className="sm:cols-span-2  mt-5 md:col-span-3 2xl:col-span-4"
          onClick={handleSize}
        >
          <span className="rounded-sm border border-white/70 px-4 py-2 text-white">
            Load More
          </span>
        </button>
      )}
    </>
  );
}
