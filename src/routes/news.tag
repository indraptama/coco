<app>
  <div class="Container">
    <div class="Grid">
      <div each="{ product in products }" class="Grid-cell u-md-size1of3">
        <product-thumb  imgsrc= { product.imgSrc } name= { product.name} weight={"Net Weight " + product.itemWeight +" Kg"}></product-thumb>
      </div>
    </div>
  </div>

  <script>

    import request from 'superagent';
    import Firebase from 'firebase';
    import _ from 'lodash';


    var myFirebaseRef = new Firebase("https://cocotest.firebaseio.com/");



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
