
$(function () {

  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });


  // var lastScrollTop = 0;
  // $("div").scroll(function (event) {
  //     var st = $(this).scrollTop();
  //     if (st > lastScrollTop) {
  //         $('img').animate({top: '-=10'}, 10);
  //     } else {
  //         $('img').animate({top: '+=10'}, 10);
  //     }
  //     lastScrollTop = st;
  // });


  // 
  // $(document).on( 'scroll', function(){
  //    if($("#introduction").isInViewport()){
  //      // console.log("seen");
  //      // $('#scroll').animate({top: '-=10'}, 10);
  //    }
  //
  // });

  // console.log("yolo");
  // document.addEventListener('scroll', function (event) {
  //     if (event.target.id === 'idOfUl') { // or any other filtering condition
  //         console.log('scrolling', event.target);
  //     }
  // }, true /*Capture event*/);

  //
  // $.fn.isInViewport = function() {
  //   var elementTop = $(this).offset().top;
  //   var elementBottom = elementTop + $(this).outerHeight();
  //   var viewportTop = $(window).scrollTop();
  //   var viewportBottom = viewportTop + $(window).height();
  //   return elementBottom > viewportTop && elementTop < viewportBottom;
  // };


});

//
// jQuery(document).ready(
//   function() {
//
//     var $w = $(window);
//     var $d = $('#oh');
//     var $y = $('#yeah');
//     var $c = $('#commom');
//     var $b = $('#baby');
//
//     var lastScrollTop = $w.scrollTop();
//
//     var _x = 0;
//     var _y = 0;
//
//     $(window).scroll(function(event) {
//       var st = $w.scrollTop();
//
//       _x = st;
//       _y = st;
//
//       lastScrollTop = st;
//
//       $d.css('right', _x);
//       $d.css('bottom', _y);
//
//       $y.css('top', _x + _y);
//       // $y.css('right', _y);
//
//       //-----------
//       var $myElement = $('#second-container'),
//         canUserSeeIt = inViewport($myElement);
//
//
//         if(canUserSeeIt){
//           $c.css({'right': _y});
//           $b.css({'left': _x});
//         }
//     });
//
//     //check if el is visible in viewport
//     function inViewport($ele) {
//       var lBound = $(window).scrollTop(),
//         uBound = lBound + $(window).height(),
//         top = $ele.offset().top,
//         bottom = top + $ele.outerHeight(true);
//
//       return (top > lBound && top < uBound) ||
//         (bottom > lBound && bottom < uBound) ||
//         (lBound >= top && lBound <= bottom) ||
//         (uBound >= top && uBound <= bottom);
//     }
//   });
//
//
//
