import { all, put, takeLatest } from '@redux-saga/core/effects';
import { getRandomUsersRequest } from '../api';
import { TGetRandomUsersSaga } from '../types';

function* getRandomUsers({ payload }: TGetRandomUsersSaga) {
  try {
    const { data, error } = yield getRandomUsersRequest(payload);
    if (error) {
      yield put({
        type: 'API_FAILURE',
        error: error,
      });
    }

    if (data.results.length > 0) {
      yield put({
        type: 'API_SUCCESS',
        data: data.results,
      });
    } else {
      yield put({ type: 'API_LIST_END' });
    }
  } catch (err: any) {
    yield put({
      type: 'API_FAILURE',
      error: err,
    });
  }
}

function* getRandomUsersSaga() {
  yield takeLatest('API_REQUEST', getRandomUsers);
}

export default function* rootSaga() {
  yield all([getRandomUsersSaga()]);
}
