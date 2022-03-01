const OlTheme = (function () {

  const init = function () {
    setEvents();
  }

  const setEvents = function () {
    $(document)
      .on('click', '.js-close-drawer', closeDrawer)
      .on('click', '.js-filter-button', customProductFilter);
  }

  $(document).ready(function(){
    $('.js-slider').slick({
      dots: false,
      arrows: false,
      autoplay: true,
      pauseOnHover: false,
      draggable: false
    });
  });

  const closeDrawer = function () {
    document.querySelector('.js-menu-drawer-details').firstElementChild.click();
  };

  const customProductFilter = function (event) {
    const input = event.currentTarget.value;
    const productArr = Array.from(document.querySelectorAll('.js-featured-product')); 

    productArr.map(x => { 
      if ( x.getAttribute('product-type') == input || input == 'All' ) {
        x.removeAttribute('style');        
      } else {
        x.style.display = 'none';
      }
    });

  };

  return {
    init: init
  }
})();

OlTheme.init();