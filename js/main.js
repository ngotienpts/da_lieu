document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // show sub menu mb
  var subMenu = document.querySelector(".sub-menu-mb-wrapper");
  var showSubMenu = document.querySelectorAll(".show-submenu");

  // width document
  var widthDoc = document.querySelector("body");

  //  show search pc
  var searchPc = document.querySelector('.navigation-search');

  // show thanh qua dat duoc
  var achievements = document.querySelectorAll('.achievement-heading');

  // show popup
  var showPopupAboutUs = document.querySelector('.generality-icon');
  var popupAboutUs = document.querySelector('.popup-about-us-wrapper');
  var closePopupAboutUs = document.querySelector('.close-popup-about-us')
  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }


      // show sub menu
      if (showSubMenu) {
        showSubMenu.forEach(function(index){
          index.onclick = function () {
            if (subMenu) {
              subMenu.classList.add("active");
            }
          };
        })
      }


      if (subMenu) {
        var showChildrenMenu = subMenu.querySelectorAll(".sub-menu-mb-item__icon");
        var closeSubMenu = subMenu.querySelector(".close-sub-menu");
        showChildrenMenu.forEach(function (a) {
          a.onclick = function(){
            a.parentElement.parentElement.classList.toggle('active')
          }
        });
        closeSubMenu.onclick = function () {
          subMenu.classList.remove("active");
        };
      }

      // show search
      if(searchPc){
        searchPc.querySelector('.fa-search').onclick = function(){
          searchPc.parentElement.classList.toggle('hide-items');
          searchPc.classList.toggle('active');
        }
      }
      

      // show thanh qua dat duoc
      if(achievements){
        achievements.forEach(function(a){
          a.onclick = function(){
            a.parentElement.classList.toggle('open')
          }
        })
      }

      // show popup
      if(showPopupAboutUs){
        showPopupAboutUs.onclick = function(){
          if(popupAboutUs){
            if(popupAboutUs.classList.contains('show')){
              popupAboutUs.classList.remove('show')
            }else {
              popupAboutUs.classList.add('show')
            }
          }
        }
        if(closePopupAboutUs){
          closePopupAboutUs.onclick = function(){
            popupAboutUs.classList.remove('show');
          }
        }
      }
      if(widthDoc && widthDoc.clientWidth < 768){
        // slide idea
        _this.slideFeatures();
      }
      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {});
    },
    // slide top
    slideTop: function () {
      $(".slide-top").slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
      });
    },
    // slide doctors
    slideDoctor: function () {
      $(".main-team-doctors-container").slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          }
        ],
      });
    },
    // slide index
    slideIndex:function(){
      $(".tabs")
        .not(".slick-initialized")
        .slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          asNavFor: '.tab-content',
          focusOnSelect: true,
          infinite: false,
        });
      $(".tab-content").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.tabs',
        infinite: true,
        dots: false,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,

      });
    },
    // slide one
    slideFeatures: function () {
      $(".slide-one").slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
      });
    },
    // sticky sidebar cate
    stickySlidebarCate:function(){
      $('.leftSidebarCate, .rightSidebarCate').theiaStickySidebar({
        'containerSelector':'#sticky-cate',
        'additionalMarginTop': 100,
        'additionalMarginBottom': 20,
      });
    },
    // sticky sidebar detail
    stickySlidebarDetail:function(){
      $('.leftSidebarDetail, .rightSidebarDetail').theiaStickySidebar({
        'containerSelector':'#sticky-detail',
        'additionalMarginTop': 100,
        'additionalMarginBottom': 20,
      });
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slide top
      this.slideTop();
      // slide doctors
      this.slideDoctor();
      // slide index
      this.slideIndex();
      // sticky sidebar cate
      this.stickySlidebarCate();
      // sticky sidebar detail
      this.stickySlidebarDetail();
    },
  };

  app.start();
});
