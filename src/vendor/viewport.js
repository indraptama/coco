require('./asset.js');
import Masonry from 'packery';

import imgFill from './vendor/imgFill.js';
var elem = document.querySelector('#Masonry');

function winY(elem) {
  const elems = Array.from(document.querySelectorAll(elem));
  const sizeY = window.innerHeight;
  const sizeYminBar = sizeY - 56;

  for (var i = 0; i < elems.length; i++) {
    var dHeight = elems[i].getAttribute('data-height');
    elems[i].style.paddingBottom = (sizeYminBar / dHeight + 'px');
  }
};

imgFill('.imgFill', '.imgFillSrc');
winY('[data-height]');
