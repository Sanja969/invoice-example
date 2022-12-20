/* eslint-disable import/prefer-default-export */
import { ITEMS_ACTION_TYPES } from './items.types';

export const fetchItemsStart = () => (
  {
  type: ITEMS_ACTION_TYPES.FETCH_ITEMS_START,
})

export const fetchItemsSuccess = (items) => ({
  type: ITEMS_ACTION_TYPES.FETCH_ITEMS_SUCCESS,
  payload: items,
})

export const fetchItemsFailed = (error) => ({
  type: ITEMS_ACTION_TYPES.FETCH_ITEMS_FAILED,
  payload: error,
})

export const postItemStart = (item) => (
  {
  type: ITEMS_ACTION_TYPES.POST_ITEM_START,
  payload: item,
})

export const postItemSuccess = (item) =>( {
  type: ITEMS_ACTION_TYPES.POST_ITEM_SUCCESS,
  payload: item,
})

export const postItemFailed = (error) => ({
  type: ITEMS_ACTION_TYPES.POST_ITEM_FAILED,
  payload: error,
})