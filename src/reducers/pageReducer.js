import { IMAGES } from '../constants';

const pageReducer = (page = 1, action) => {
    switch(action.type) {
        case IMAGES.LOAD_IMAGES:
            return page + 1;
        default:
            return page;
    }
}

export default pageReducer;