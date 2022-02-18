const OlTheme = (function () {

  const init = function () {
    setEvents();
  }

  const setEvents = function () {
    $(document)
      .on('click', '.js-close-drawer', closeDrawer);
  }

  $(document).ready(function(){
    $('.js-slider').slick({
      dots: false
    });
  });

  const closeDrawer = function () {
    document.querySelector('.js-menu-drawer-details').firstElementChild.click();
  }

  return {
    init: init
  }
})();

OlTheme.init();