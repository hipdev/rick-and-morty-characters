"use client";

import { useEffect } from "react";
import { useLastViewedStore } from "@/lib/stores/last-viewed-store";

export default function CountViewClient({
  character,
}: {
  character: Character;
}) {
  const { setLastViewedItem } = useLastViewedStore();

  useEffect(() => {
    setLastViewedItem(character);
  }, [setLastViewedItem, character]);

  return null;
}
