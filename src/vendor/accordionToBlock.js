
    var acc_container =  document.querySelectorAll('.accordionToBlock');
    var breakPoint = window.matchMedia("(max-width: 530px)");

    //function for add isHidden to all .accordionToblock-content small screen
    function hideAccContent(){
      var accordionBody = document.querySelectorAll('.accordionToBlock-content');
      for (var i = 0; i < accordionBody.length; i++) {
        accordionBody[i].classList.add('isHidden');
      };
    };

    // function for add all to class disable
    function addIsNotActive(){
      var accordionBody = document.querySelectorAll('.accordionToBlock-title');
      for (var i = 0; i < accordionBody.length; i++) {
        accordionBody[i].classList.add('isNotActive');
      };
    };


    // Function for add/remove class .isHidden to .accordionToblock-content
    function showSibling(elem) {
      elem.addEventListener('click',function(event){
        this.nextElementSibling.classList.contains('isHidden') ? this.nextElementSibling.classList.remove('isHidden') : this.nextElementSibling.classList.add('isHidden');
      },false)
    };

    function isActive(elem) {
      elem.addEventListener('click',function(event){
        this.classList.contains('isNotActive') ? this.classList.remove('isNotActive') & this.classList.add('isActive') : this.classList.remove('isActive') & this.classList.add('isNotActive');
      },false)
    };

    // hide accordionToBlock-content on small screen
    function accordionToBlock() {
      if (breakPoint.matches) {
        hideAccContent();
        addIsNotActive();
        for (var i = 0; i < acc_container.length; i++) {
          var acc_trigger =  acc_container[i].querySelector('.accordionToBlock-title');
          showSibling(acc_trigger);
          isActive(acc_trigger);
        };
      }
    }
    window.onload = accordionToBlock;

    module.exports = accordionToBlock;
