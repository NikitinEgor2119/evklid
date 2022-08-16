
// свайпер
const swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});


// окно поиска
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form'). classList.add('search-form_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form'). classList.remove('search-form_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

// burger
document.querySelector(".burger").addEventListener("click", function() {
	this.classList.toggle("active");
})
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const body = document.body;
const menuLinks = document.querySelectorAll('.nav__link');
const close = document.querySelector('.close-form');
const search = document.querySelector('.search');


burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  body.classList.toggle('stop-scroll');

});

menuLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    body.classList.remove('stop-scroll');
  });
});


// аккордеон
$(".accordion").accordion({
  heightStyle: "content",
  active: false,
  collapsible: true,
  });

  // табы

  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
    btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


