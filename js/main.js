import { getPictures } from './data.js';
import { renderThumbnails } from './thumbnails.js';

const pictures = getPictures();
renderThumbnails(pictures);
