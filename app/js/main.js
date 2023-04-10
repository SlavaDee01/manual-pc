$(function () {
 
//Intro-slider  
  var swiper = new Swiper('.intro__slider', {
        effect: 'scrollbar',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        dots: true,
          loop: true,
          pagination: {
         el: '.swiper-pagination',
        },
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
          scrollbar: {
          el: '.swiper-scrollbar',
        }, 
  });

//Post-slider
  var swiper = new Swiper('.post__slider', {
        effect: 'navigation',
        grabCursor: true,
        // centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 15,
        dots: false,
          loop: false,
          pagination: {
         el: '.swiper-pagination',
        },
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
          scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
		            360: {
                  
		            	slidesPerView: 1,
              
		            },
                768: {
                  
		            	slidesPerView: 2,
                  
		            },
                1002: {
                  
                  slidesPerView: 1,
                },
                1240: {
                  
                  slidesPerView: 2,
                }
	      } 
  });

// Modal
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
    });
    
    modalClose.on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents('.modal');
            modalParent.find(".modal__dialog").css({
                transform: "scale(0)"
            });
        
        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');          
        }, 200);          
    });
    
    
    $(".modal").on("click", function(event) {
        let $this = $(this);
           $this.find(".modal__dialog").css({
                transform: "scale(0)"
            });
        
       setTimeout(function() { 
           $this.removeClass('show');
           $("body").removeClass('no-scroll');
        }, 200);   
    });
    
    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation(); 
    });
    
//Modal-menu
    modalCall.on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
        setTimeout(function(){
            $(modalId).find(".modal-menu__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
    });
    
    modalClose.on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents('.modal-menu');
            modalParent.find(".modal-menu__dialog").css({
                transform: "scale(0)"
            });
        
        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');          
        }, 200);          
    });
    
    
    $(".modal-menu").on("click", function(event) {
        let $this = $(this);
        $this.find(".modal-menu__dialog").css({
                transform: "scale(0)"
            });
        
       setTimeout(function() { 
           $this.removeClass('show');
           $("body").removeClass('no-scroll');
        }, 200);   
        
    });
    
    $(".modal-menu__dialog").on("click", function(event) {
        event.stopPropagation();
        
    });

 
    //Header__input (placeholder = "");
    start();
    window.addEventListener('resize', start);
    function start(resize) {
      if ($(window).width() < 999){
      $('#social').appendTo($('#intro'));
      
      }
      if ($(window).width() > 999){
      $('#social').appendTo($('#gallery-social'));  
      }
   }
   
   var inp = document.querySelector('.header__form-input');
      window.addEventListener('resize', function() {
         inp.setAttribute('placeholder', this.innerWidth >= 1000 ? 'Введите ваш вопрос' : ' ');
      });
      window.dispatchEvent(new Event('resize'));
})

// Scroll by section
  document.addEventListener('DOMContentLoaded', function() {
    const navInit = () => {
    const nav = document.querySelector('.post__nav') 
    const links = document.querySelectorAll('.post__nav_link')  
    const sections = document.querySelectorAll('.post__section')  
    
    sections.forEach(section => {    
      if (window.pageYOffset >= section.offsetTop) { 
         document.querySelectorAll('.post__section').forEach((el) => {
					if (el.classList.contains('post__section_active')) {
						el.classList.remove('post__section_active');
					}
				});

        links.forEach(link => { 
          link.classList.remove('post__nav_link_active') 
          if (link.dataset.section === section.dataset.section) {
            link.classList.add('post__nav_link_active') 
            section.classList.add('post__section_active')
          }
        })
      }
    })  
  }
  $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        $("html, body").animate({scrollTop: elementOffset -20}, 1000);
    });
      navInit() 
        window.addEventListener('scroll', () => {
      navInit() 
    })
        window.addEventListener('resize', () => {
      navInit() 
    })
  })

  


    
         
   



  



  
function myFunction() {
  setTimeout(function(){
    
    // targetDrop.style.transition= 'all 3s'; 
    document.getElementById("myDropdown-a").classList.toggle("show");
    // document.getElementById("myDropdown-b").classList.toggle("show");
    // document.getElementById("myDropdown-c").classList.toggle("show");
    // document.getElementById("myDropdown-d").classList.toggle("show");
    // document.getElementById("myDropdown-e").classList.toggle("show");
    
  }, 200);
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.post__dropbtn')) {
    var dropdowns = document.getElementsByClassName("post__dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      //  if (openDropdown.classList.contains('show')) {
      //    openDropdown.classList.remove('show');
      //  }
    }
  }
}








