import { IMAGES, STATS } from '../constants';

// images
export const loadImages = () => ({
    type: IMAGES.LOAD_IMAGES
});

export const setImages = images => ({
    type: IMAGES.LOAD_IMAGES_SUCCESS,
    images
});

export const setImagesError = error => ({
    type: IMAGES.LOAD_IMAGES_FAIL,
    error
});

// stats
export const loadImageStats = id => ({
    type: STATS.LOAD_IMAGES_STATS,
    id
});

export const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_IMAGES_STATS_SUCCESS,
    id,
    downloads
});

export const setImageStatsError = id => ({
    type: STATS.LOAD_IMAGES_STATS_FAIL,
    id
});