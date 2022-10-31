$(function () {

  $('.questions-accardion__btn').on('click', function(){
    $(this).next().slideToggle(500); 
 });

 $('.slider-reviews__block').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: '.slider-reviews__arrows',
    prevArrow: '<button type="button" class="reviews__arrows-left">Previous</button>',
    nextArrow: '<button type="button" class="reviews__arrows-right">Next</button>',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  
 })



 $('.slider-doctor__block').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  appendArrows: '.slider-doctor__arrows',
  prevArrow: '<button type="button" class="doctor__arrows-left">Previous</button>',
  nextArrow: '<button type="button" class="doctor__arrows-right">Next</button>',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});


$('.experts-doctor__block').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  appendArrows: '.experts-doctor__arrows',
  prevArrow: '<button type="button" class="doctor__arrows-left">Previous</button>',
  nextArrow: '<button type="button" class="doctor__arrows-right">Next</button>',
  
});

$('.slider-about__block').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  appendArrows: '.slider-about__arrows',
  prevArrow: '<button type="button" class="doctor__arrows-left">Previous</button>',
  nextArrow: '<button type="button" class="doctor__arrows-right">Next</button>'
});
$('.slider-reviews__block-about').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  appendArrows: '.slider-reviews__arrows-about',
  prevArrow: '<button type="button" class="doctor__arrows-left">Previous</button>',
  nextArrow: '<button type="button" class="doctor__arrows-right">Next</button>'
});

const medicineBtn = document.querySelector('.medicine__btn');
const medicineBottom = document.querySelector('.medicine__bottom');
   
if( medicineBtn){
  medicineBtn.addEventListener('click', ()=>{
    medicineBottom.classList.toggle('hide');
  })
  
}
  


  const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');

    mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');
});


  const directionsBlockBtn = document.querySelector('.directions-block__btn');
  const directionBlockWrapperMobile = document.querySelectorAll('.directions-block__wrapper-mobile');
    directionsBlockBtn.addEventListener('click', ()=>{
      directionBlockWrapperMobile.forEach(item =>{
        item.style.display = 'block';
        directionsBlockBtn.style.display = 'none';
      })
    })

})