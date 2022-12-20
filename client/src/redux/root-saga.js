/* eslint-disable import/prefer-default-export */
import { all, call } from 'redux-saga/effects';
import { itemsSaga } from './items/items.saga';

export function* rootSaga() {
  yield all([call(itemsSaga)]);
}