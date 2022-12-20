import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  fetchItemsSuccess,
  fetchItemsFailed,
  postItemSuccess,
  postItemFailed,
} from './items.actions';
import { ITEMS_ACTION_TYPES } from './items.types';
import axios from 'axios';

const url = `http://localhost:8000/v1/items`

const getItems = async() => {
  const response = await fetch(url);
  return response.json();
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
  axios.post(url, payload,
      { headers: {'Content-Type': 'application/json'}},
    );
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

export function* itemsSaga() {
  yield all([call(onFetchItems), call(onPostItem)]);
}