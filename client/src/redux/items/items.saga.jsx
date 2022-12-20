import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  fetchItemsSuccess,
  fetchItemsFailed,
  postItemSuccess,
  postItemFailed,
  deleteItemSuccess,
  deleteItemFailed
} from './items.actions';
import { ITEMS_ACTION_TYPES } from './items.types';

const url = `http://localhost:8000/v1/items`

const getItems = async() => {
  const response = await fetch(url);
  return await response.json();
}
export function* fetchItemsAsync() {
  try {
    const itemsArray = yield call(getItems, 'items');
    yield put(fetchItemsSuccess(itemsArray));
  } catch (error) {
    yield put(fetchItemsFailed(error));
  }
}

export function* onFetchItems() {
  yield takeLatest(ITEMS_ACTION_TYPES.FETCH_ITEMS_START, fetchItemsAsync);
}

const saveItem = async (payload) => {
  const response = await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
       "Content-Type": "application/json"
      },
    });
    return await response.json();
}

export function* saveItemAsync({payload}) {
  try {
    const itemSaved = yield call(saveItem, payload);
    yield put(postItemSuccess(itemSaved));
  } catch (error) {
    yield put(postItemFailed(error));
  }
}

export function* onPostItem() {
  yield takeLatest(ITEMS_ACTION_TYPES.POST_ITEM_START, saveItemAsync);
}

const deleteItem = async (payload) => {
  const response = await fetch(`${url}/${payload}`,
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  )
  return await response.json();
}

export function* deleteItemAsync({payload}) {
  try {
    const itemSaved = yield call(deleteItem, payload);
    yield put(deleteItemSuccess(itemSaved));
  } catch (error) {
    yield put(deleteItemFailed(error));
  }
}

export function* onDeleteItem() {
  yield takeLatest(ITEMS_ACTION_TYPES.DELETE_ITEM_START, deleteItemAsync);
}

export function* itemsSaga() {
  yield all([call(onFetchItems), call(onPostItem), call(onDeleteItem)]);
}