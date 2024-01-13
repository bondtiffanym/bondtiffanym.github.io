$(document).ready(function () {

  //function to change navbar position when scrolled 
  const stickyNav = () => {
    const nav = $('nav');
    const scroll = $(window).scrollTop();
    const header = $('.header');

    const navTop = nav.position().top;
    const headerBottom = header.position().top + header.outerHeight(true);

      if (scroll >= navTop && scroll > headerBottom){
          nav.addClass('sticky');
          $('.content').addClass('pt-5');
          
      } else {
          nav.removeClass('sticky');
          $('.content').removeClass('pt-5');
      }
  };

    //function checks if animated element is in viewport 
    const isScrolledIntoView = (elem) => {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
      }
      

      // If element is scrolled into view, fade it in
      $(window).scroll(function() {
        $('.scroll-animations .animated').each(function() {
          if (isScrolledIntoView(this) === true) {
            $(this).addClass('fadeInLeft');
          }
        });

        //changes Navbar position with scroll
      $(window).scroll(function() {
       stickyNav();
      });

      });
      
      
}); 