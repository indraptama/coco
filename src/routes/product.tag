<app>
  <hero img="assets/cocosugar.jpg">
    <h4>Our Product</h4>
    <h2 class="u-resH4ToH2">Our product is organic coconut sugar, Organic coconut syrup, Organic coconut block.</h2>
  </hero>
  <div class="Container Container--medium mt1 mb3">
    <div class="Grid">
      <div each="{ product in products }" class="Grid-cell u-md-size1of3">
        <product-thumb imgsrc= { product.imgSrc } name= { product.name} weight={"Net Weight " + product.itemWeight +" Kg"} no-reorder></product-thumb>
      </div>
    </div>
  </div>

  <script>

    import request from 'superagent';
    import Firebase from 'firebase';
    import _ from 'lodash';

    this.heroText = (
      "hallo indra pratama"
    )

    // var myFirebaseRef = new Firebase("https://cocotest.firebaseio.com/");
    var self = this;
    request
      .get('http://localhost:3030/product')
      .end(function(err,res) {
        if(err) {
          console.log(err)
        } else {
          var product = _.values(res.body);
          self.products = product;
          self.update();
        }
      });
  </script>
</app>
