$(function(){
    $(function () {
        $('#js-humberger-menu, .navigation_link').on('click', function () {
          $('.navigation').slideToggle(500)
          $('.humberger-menu').toggleClass('humberger-menu-open')
        });
      });
});