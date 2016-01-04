import Vibrant from 'node-vibrant';

const ProductThumbBg = () => {
  const ProductThumbs = Array.from(document.querySelectorAll('.ProductThumb'));
  for (let ProductThumb of ProductThumbs) {
    const imgSrc = ProductThumb.querySelector('.ProductThumb-img img').getAttribute('src');
    const Title = ProductThumb.querySelector('.ProductThumb-title');
    const bgColor = new Vibrant(imgSrc);
    bgColor.getPalette((err, palette) => {
      if (err) {
        console.log(err)
      } else {
        var hexColor = palette.Vibrant.rgb.join();
        var bodyColor = palette.Vibrant.getTitleTextColor();
        console.log(hexColor);
        ProductThumb.style.backgroundColor = 'rgba(' + hexColor + ', 0.8)';
        ProductThumb.style.color = bodyColor;
        Title.style.color = bodyColor;
      }
    });
  }
};

export default ProductThumbBg;
