$(document).ready(function() {

    $('.carousel__inner').slick({
        centerMode: true,
        centerPadding: '20px',
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    
    new WOW().init();
    
    /* function initMap() {
      const tomsk = { lat: 56.48871314534761, lng: 84.94614076668013 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: tomsk
      });
      const marker = new google.maps.Marker({
        position: tomsk,
        map: map
      });
    } */

    $("#footer-buttons").on("click", ".footer-button", function(){
        $("#footer-buttons .footer-button").removeClass("footer-button_active"); //удаляем класс во всех вкладках
        $(this).addClass("footer-button_active"); //добавляем класс текущей (нажатой)
      });
    
      $('[data-modal=request]').on('click', function() {
        $('.overlay, #question').fadeIn();
      });

      $('#winners').on('click', function() {
        $('.overlay, #winners-modal').fadeIn();
      });

      $('#philosophy').on('click', function() {
        $('.overlay, #philosophy-modal').fadeIn();
      });
      
      $('#history').on('click', function() {
        $('.overlay, #history-modal').fadeIn();
      });

      $('#career').on('click', function() {
        $('.overlay, #career-modal').fadeIn();
      });

      $('.modal__close').on('click', function() {
        $('.overlay, #thanks, #question, #winners-modal, #philosophy-modal, #history-modal, #career-modal').fadeOut();
      });
  
      /* $('.button_mini').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn();
        });
      }); */
      
      function valideForms(form) {
        $(form).validate({
          rules: {
            name: "required",
            email: {
              required: true,
              email:true
            }
          },
          messages: {
            name: "Please enter your name",
            phone: "Please enter your phone number",
            email: {
              required: "Please enter your email",
              email: "Your email address is incorrect"
            }
          }
        });
      };
      valideForms('#order');
      valideForms('#question form');
      /* valideForms('#order form'); */
      
      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $('#question').fadeOut();
          $('.overlay, #thanks').fadeIn(); 
          $('form').trigger('reset');
        });
        return false;
      });

      /* const button = document.querySelector('button');
      const inputs = [...document.querySelectorAll('input')];
      const onInput = () => button.disabled = inputs.every(n => !n.value);
      inputs.forEach(n => n.addEventListener('input', onInput));
      onInput(); */
      
      $("a[href^='#promo']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
});
