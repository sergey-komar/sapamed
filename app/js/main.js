$(function () {

  $('.questions-accardion__btn').on('click', function(){
    $(this).next().slideToggle(500); 
 });

 $('.slider-reviews__block').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: '.slider-reviews__arrows',
    prevArrow: '<button type="button" class="reviews__arrows-left">Previous</button>',
    nextArrow: '<button type="button" class="reviews__arrows-right">Next</button>'
 })

 $('.slider-doctor__block').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  appendArrows: '.slider-doctor__arrows',
  prevArrow: '<button type="button" class="doctor__arrows-left">Previous</button>',
  nextArrow: '<button type="button" class="doctor__arrows-right">Next</button>'
});
$('.experts-doctor__block').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  appendArrows: '.experts-doctor__arrows',
  prevArrow: '<button type="button" class="doctor__arrows-left">Previous</button>',
  nextArrow: '<button type="button" class="doctor__arrows-right">Next</button>'
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
   
  medicineBtn.addEventListener('click', ()=>{
    medicineBottom.classList.toggle('hide');
  })


})