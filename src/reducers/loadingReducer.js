import { IMAGES } from '../constants';

const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case IMAGES.LOAD_IMAGES:
            return true;
        case IMAGES.LOAD_IMAGES_SUCCESS:
            return false;
        case IMAGES.LOAD_IMAGES_FAIL:
            return false;
        default:
            return state;
    }
}

export default loadingReducer;