<hero>
  <div class="Hero">
    <div class="Hero-img imgFill">
      <img class="imgFillSrc" src="{ opts.img }" alt="" />
    </div>
    <div class="Hero-content">
      <div class="Container Container--medium pl2 pr2">
        <yield/>
        <div class="Hero-action">
          <a href="#">{ opts.actionName }</a>
        <div>
      </div>
    </div>
  </div>

  <script>
    import imgFill from '../../vendor/imgFill.js';
    this.on('mount', function() {
      imgFill('.imgFill','.imgFillSrc');
    })

  </script>

</hero>
