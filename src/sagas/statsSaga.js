import { take, fork, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

function* handleStatsRequest(id) {
    try {
        yield put(loadImageStats(id));
        const res = yield call(fetchImageStats, id);
        yield put(setImageStats(id, res.downloads.total))
        return true;
    } catch (error) {
    }

    yield put(setImageStatsError(id));
}

function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_IMAGES_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id)
        }
    }
}

export default watchStatsRequest;