// usage:
// imgFill(target, imgSrc)
// require es6

const setCSS = (element) => {
  const CSS = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  // create multiple CSS Property
  for (let i in CSS) {
    element.style[i] = CSS[i];
  }
};

const imgFill = (target, srcClass) => {
  const imgConts = Array.from(document.querySelectorAll(target));
  for (const img of imgConts) {
    // define image source class
    const imgSrc = img.querySelector(srcClass);
    // Get image source url
    const imgSrcURL = imgSrc.getAttribute('src');
    // hide source images
    imgSrc.style.display = 'none';
    // Set Multiple CSS Property
    img.style.backgroundImage = 'url(' + imgSrcURL + ')';
    setCSS(img);
  }
};

export default imgFill;
