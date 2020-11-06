//counter

$(document).ready(function () {
  var show = true;
  var countbox = ".quantity-sales";
  $(window).on("scroll load resize", function () {
    if (!show) return false; 
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.counter-item').css('opacity', '1');
      $('.counter-item').spincrement({
        thousandSeparator: "",
        duration: 3000
      });
      show = false;
    }
  });
});


$(document).ready(function () {
  var show = true;
  var countbox = ".about-company-list";
  $(window).on("scroll load resize", function () {
    if (!show) return false; 
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.about-company-list-item div').css('opacity', '1');
      $('.about-company-list-item div').spincrement({
        thousandSeparator: "",
        duration:2000
      });
      show = false;
    }
  });
});


//slider
$('#certificate-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  dots: true,
  speed: 300,
  prevArrow:$('.certificate-slider-prev'),
  nextArrow:$('.certificate-slider-next'),
  responsive: [{
    breakpoint:767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      navigation: false,
    }
  }]
});

//select
$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
$('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 



//sticky header
function toggleHeader(){
  var scroll_status = $(document).scrollTop();
  if(scroll_status > 0)
    $("header").addClass("header_min");
  else
    $("header").removeClass("header_min");
  }


$(document).scroll(function(){
  toggleHeader();
})

//events

$(document).ready(function () {
  $('.burger-btn').on('click', function(){
    $('#headerMenu').toggleClass('open-menu')
     $(this).toggleClass('active-burger')
     $('body').toggleClass('activePopup')
  })
  $('#headerMenu li').on('click', function(){
    $('#headerMenu').removeClass('open-menu')
     $('.burger-btn').toggleClass('active-burger')
     $('body').toggleClass('activePopup')
  })
  $('#mobile-bunner-btn, #aboutCompanyBtn').on('click', function(){
    $('#callBackPopup').show()
     $('body').addClass('activePopup')
  })
  $('.active-cross').on('click', function(){
    $('.popup-wrap').hide()
     $('body').removeClass('activePopup')
  })
   $('.feedback-form-btn').on('click', function(){
    $('.popup-wrap').hide()
     $('body').removeClass('activePopup')
  })
})
function windowSize(){
  if ($(window).width() <= '767'){
    $('.about-company__text').appendTo('.about-company-top-line');
  }
}
windowSize();
$(window).on('resize', function(){
   windowSize()
});