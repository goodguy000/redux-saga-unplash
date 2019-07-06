import { IMAGES } from '../constants';

const errorReducer = (state = null, action) => {
    switch(action.type) {
        case IMAGES.LOAD_IMAGES:
            return null;
        case IMAGES.LOAD_IMAGES_SUCCESS:
            return null;
        case IMAGES.LOAD_IMAGES_FAIL:
            return action.error;
        default:
            return state;
    }
}

export default errorReducer;