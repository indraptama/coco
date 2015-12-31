window.onload = fullHeight;
window.onresize = fullHeight;

function fullHeight() {
  var y = window.innerHeight;
  var x = window.innerWidth;

  var size = {x,y};
  return size;
}
