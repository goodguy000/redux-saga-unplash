import { takeEvery, put, select, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setImagesError } from '../actions';

const getPage = state => state.nextPage;

function* handleLoadImages() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page)
        yield put(setImages(images));
    } catch(error) {
        yield put(setImagesError(error.toString()));
    }
   
}

// watcher saga
function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD_IMAGES, handleLoadImages);
}

// watcher saga -> actions -> worker saga

export default watchImagesLoad;