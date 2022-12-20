/* eslint-disable default-case */
/* eslint-disable no-undef */
import { ITEMS_ACTION_TYPES } from './items.types';

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null
}

export const itemsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ITEMS_ACTION_TYPES.FETCH_ITEMS_START:
      return { ...state, isLoading: true }
    case ITEMS_ACTION_TYPES.FETCH_ITEMS_SUCCESS:
      return { ...state, items: payload, isLoading: false }
    case ITEMS_ACTION_TYPES.FETCH_ITEMS_FAILED:
      return { ...state, error: payload, isLoading: false }
    case ITEMS_ACTION_TYPES.POST_ITEM_START:
      return { ...state, isLoading: true }
    case ITEMS_ACTION_TYPES.POST_ITEM_SUCCESS:
      return { ...state, items: payload, isLoading: false }
    case ITEMS_ACTION_TYPES.POST_ITEM_FAILED:
      return { ...state,  error: payload, isLoading: false }
      case ITEMS_ACTION_TYPES.DELETE_ITEM_START:
        return { ...state, isLoading: true }
      case ITEMS_ACTION_TYPES.DELETE_ITEM_SUCCESS:
        return { ...state, items: payload, isLoading: false }
      case ITEMS_ACTION_TYPES.DELETE_ITEM_FAILED:
        return { ...state,  error: payload, isLoading: false }
    default:
      return state;
  }
}