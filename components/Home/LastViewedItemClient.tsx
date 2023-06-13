"use client";

import { SmallCardLink } from "@/design-system/elements/SmallCardLink/SmallCardLink";
import { Title } from "@/design-system";
import { useLastViewedStore } from "@/lib/stores/last-viewed-store";

export default function LastViewedItemsClient() {
  const { lastViewedItems } = useLastViewedStore();

  if (lastViewedItems.length == 0) return null;

  return (
    <section className="">
      <Title size="xxlarge" className="py-5">
        Last viewed
      </Title>
      <div className="flex scroll-m-10  flex-nowrap gap-10 overflow-x-auto pb-3 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-zinc-900">
        {lastViewedItems?.map((character) => (
          <div key={character.id} className="min-w-[18rem]">
            <SmallCardLink character={character} />
          </div>
        ))}
      </div>
    </section>
  );
}
