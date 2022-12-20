import { createSelector } from 'reselect';

const selectItemsReducer = (state) => state.items;

export const selectItemsSuccess = createSelector(
  [selectItemsReducer],
  (itemsSlice) => itemsSlice.items,
);

export const getItems = createSelector(
  [selectItemsSuccess],
  (items) => {
   const result = items.reduce((acc, item) => {
      const { itemNumber } = item;
      acc[itemNumber] = item;
      return acc;
    }, {})
    return result;
  },
);

export const selectItemsIsLoading = createSelector(
  [selectItemsReducer],
  (ItemsSlice) => ItemsSlice.isLoading,
);