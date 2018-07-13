$(document).ready(function() {
  $(".jsClick").click(function(){
    $(".popUpWrp").css({"display":"block"});
  });
  $(".closePopup").click(function(){
    $(".popUpWrp").css({"display":"none"});
  });
  $('.navMenu').on('click',function(){
    $('.topNav__li').toggleClass("js-dsb");
  });
  $('.buttonRed,.whiteButton').click(function (e) {
    e.preventDefault();
  });
  $(window).scroll(function(){
    if ($(window).scrollTop() > 150) {
      $(".topNav").addClass("topNav2");
      $(".social").css({"display":"none"});
      $(".topNav__li").css({"padding-top":"0"});

    }
    else {
      $(".topNav").removeClass("topNav2");
      $(".social").css({"display":"block"});
      $(".topNav__li").css({"padding-top":"25px"});
    }
  });


  $(".topNav__li").on("click","a", function(e){
    e.preventDefault();
    var id=$(this).attr("href"),
    top=$(id).offset().top-150;
    $("body,html").animate({scrollTop:top},700);
  });

  $(".stepBlock__item").on("click", function() {
    $(".stepBlock__item").removeClass("stepBlock__itemActive");
    $(this).addClass("stepBlock__itemActive");
    $(".stepInfo").fadeOut(0);

    if($(this).hasClass("step1")){$(".stepInfo1").fadeIn(300);}
    if($(this).hasClass("step2")){$(".stepInfo2").fadeIn(300);}
    if($(this).hasClass("step3")){$(".stepInfo3").fadeIn(300);}
    if($(this).hasClass("step4")){$(".stepInfo4").fadeIn(300);}
    if($(this).hasClass("step5")){$(".stepInfo5").fadeIn(300);}
    if($(this).hasClass("step6")){$(".stepInfo6").fadeIn(300);}
  });

  $('.filterPortfolio').bind('click', function(e){
    var filter = $(this).val();
    var key = "."+filter;
    $('.portfolioSlider').slick('slickUnfilter');
    $('.portfolioSlider').slick('slickFilter',key).slick('refresh');
    $('.portfolioSlider').slick('slickGoTo', 0);
    $(".filterPortfolio").removeClass("activeFilterJSL");
    $(this).addClass("activeFilterJSL");
  });
  $(".slederReviews").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.navigationTopSlide__left_Reviews',
    nextArrow: '.navigationTopSlide__right_Reviews',
  });
  $(".slederPartners").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    mobileFirst: true,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,

    prevArrow: '.navigationPartnersSlide__left',
    nextArrow: '.navigationPartnersSlide__right',
    responsive:true,
    responsive: [
    {
      breakpoint: 2500,
      settings: {
       slidesToShow: 4,
       slidesToScroll: 1,
     }},
     {
      breakpoint: 1400,
      settings: {
       slidesToShow: 4,
       slidesToScroll: 1,
     }},
     {
      breakpoint: 1000,
      settings: {
       slidesToShow: 4,
       slidesToScroll: 1,
     }},
     {
      breakpoint: 769,
      settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
     }},
     {
      breakpoint: 320,
      settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
     }}
     ,
     {
      breakpoint: 280,
      settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
     }}
     ]
   });


  $(".topSlide").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.navigationTopSlide__left',
    nextArrow: '.navigationTopSlide__right',
  });
  $(".portfolioSlider").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    mobileFirst: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.navigationPortfolioSlider__left',
    nextArrow: '.navigationPortfolioSlider__right',
  });
  $(window).resize(function() {
    var width = $(window).width();
    if (width < 1000){
      $(".jsTopNav").removeClass("container").addClass("container-fluid");
    }
    else{
      $(".jsTopNav").removeClass("container-fluid").addClass("container");
    };
    if (width < 600){
      $(".jsPadding").addClass("noPadding");
      $(".jsPR").addClass("noPR");
      $(".jsPL").addClass("noPL");

    }
    else{
      $(".jsPadding").removeClass("noPadding");
      $(".jsPR").removeClass("noPR");
      $(".jsPL").removeClass("noPL");
    };
    if (width < 500){
      $(".pt100").removeClass("col-7");
      $(".pt100").addClass("col-12");

    }
    else{
      $(".pt100").removeClass("col-12");
      $(".pt100").addClass("col-7");
    };
  });
  $(window).resize();
  $(".item__panel").on("click", function() {
    if ($(this).hasClass("active")) {
      return null;
        // $(this).removeClass("active");
        // $(this).siblings(".item__content").slideUp(200);
      } else {
        $(".item__panel").removeClass("active");
        $(this).addClass("active");
        $(".item__content").slideUp(200);
        $(this).siblings(".item__content").slideDown(200);
      }
    });
  $(".item__panel").on("click", function() {
    $(".panel__elementAnimation").removeClass("sds");
    $(".jsIcoAnim").removeClass("sprIco_jsIcoAnim");
    $(".animationWave__element").removeClass("sds1");
      // if($(".sprite-arrowBW").hasClass("rotateAnim")){
       $(".sprite-arrowBW").removeClass("rotateAnim");
      // }
      $(this).children(".panel__elementAnimation").addClass("sds");
      if ($(".sprite-arrowBW").hasClass("rotateAnim")){
        return null;
      }else{
        $(this).children(".panel__elementAnimation").siblings(".panel__icoArrow").children(".sprite-arrowBW").toggleClass("rotateAnim");
        $(this).children(".panel__elementAnimation").children(".sprIco").addClass("sprIco_jsIcoAnim");
        $(this).children(".panel__elementAnimation").children(".animationWave").children(".animationWave__element").addClass("sds1");
      }
      

    });
  $('.portfolioSlider').slickLightbox({
  });

    $(".formJS").submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $(".popUpWrp").fadeOut(0);
        $(".popUpSuccess").fadeIn(2500).fadeOut(200);
        $(".formJS").trigger("reset");
      });
      return false;
    });

    $(".formJS2").submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $(".popUpWrp").fadeOut(0);
        $(".popUpSuccess").fadeIn(2500).fadeOut(200);
        $(".formJS2").trigger("reset");
      });
      return false;
    });

    
    $(function(){
      $(".inputPhone").mask("+7 (999) 999-9999");
    });
    !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
  });