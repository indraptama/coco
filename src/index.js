require('./asset.js');
// import imgFill from './vendor/imgFill.js';
// imgFill('.imgFill', '.imgFillSrc');
// import ProductThumbBg from './vendor/bgcolor.js';

import './component-riot/product-thumb/product-thumb.tag';
import './component-riot/top-header/top-header.tag';
import './component-riot/hero/hero.tag';
import './routes/product.tag';

import riot from 'riot';

riot.mount('app');
