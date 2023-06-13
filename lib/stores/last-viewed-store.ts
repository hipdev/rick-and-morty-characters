import { create } from "zustand";

/* This code is creating a custom hook called `useLastViewedStore` using the `create` function from the
`zustand` library. The hook returns an object with two properties: `lastViewedItems` and
`addLastViewedItem`. */

type StoreProps = {
  lastViewedItems: Character[];
  setLastViewedItem: (item: Character) => void;
};

export const useLastViewedStore = create<StoreProps>((set) => ({
  lastViewedItems: [],
  setLastViewedItem: (item: Character) =>
    set((state) => {
      // Check if the item already exists in the store based on the item.id
      const isUnique = state.lastViewedItems.every(
        (existingItem) => existingItem.id !== item.id
      );

      // Add the item only if it is unique
      if (isUnique) {
        const updatedItems = [item, ...state.lastViewedItems.slice(0, 4)]; // Keep only the first 4 items, and prepend the new item
        return { lastViewedItems: updatedItems };
      }

      return state; // Item already exists, return the current state
    }),
}));
