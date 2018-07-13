$(".JSAnimPlaceholder").change(function() {
  if($(this).val())
    $(this).addClass("has_value");
  else
    $(this).removeClass("has_value");
});
// $("svg").attr("preserveAspectRatio" ,"xMinYMin meet");
$(function(){
  $(".play").click(function(){
    var dataYt=$(this).parents(".wrapperVideo").attr("data-youtube");
    console.log(dataYt);
    $(this).parents(".wrapperVideo").html('<iframe src="https://www.youtube.com/embed/'+ dataYt +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  });
});
$(document).on('ready', function() {
  $('.btn_orange').click(function (e) {
    e.preventDefault();       
  });
  (function($){
    var Polyfill = function(userOptions){
      this.options = $.extend({}, Polyfill.defaultOptions, userOptions);

      this.isEnabled = false;

      if(this.options.forcePolyfill || !this.supportsPointerEvents()){
        this.registerEvents();
        this.isEnabled = true;
      }
    };
    Polyfill.defaultOptions = {
      forcePolyfill: false,
      selector: '*',
      listenOn: ['click', 'dblclick', 'mousedown', 'mouseup'],
      pointerEventsNoneClass: null,
      pointerEventsAllClass: null,
      eventNamespace: 'pointer-events-polyfill'
    };
    Polyfill.prototype.registerEvents = function(){
      $(document).on(this.getEventNames(), this.options.selector, $.proxy(this.onElementClick, this));
    };
    Polyfill.prototype.getEventNames = function(){
      var eventNamespace = this.options.eventNamespace ? '.' + this.options.eventNamespace : '';
      return this.options.listenOn.join(eventNamespace + ' ') + eventNamespace;
    };
    Polyfill.prototype.supportsPointerEvents = function(){
      var style = document.createElement('a').style;
      style.cssText = 'pointer-events:auto';
      return style.pointerEvents === 'auto';
    };
    Polyfill.prototype.isClickThrough = function($el){
      var elPointerEventsCss = $el.css('pointer-events');
      if($el.length === 0 || elPointerEventsCss === 'all' || $el.is(':root') || $el.hasClass(this.options.pointerEventsAllClass)){
        return false;
      }
      if(elPointerEventsCss === 'none' || $el.hasClass(this.options.pointerEventsNoneClass) || this.isClickThrough($el.parent())){
        return true;
      }
      return false;
    };
    Polyfill.prototype.onElementClick = function(e){
      var $elOrg = $(e.target);

      if(!this.isClickThrough($elOrg)){
        return true;
      }
      $elOrg.hide();
      var elBelow = document.elementFromPoint(e.clientX, e.clientY);
      e.target = elBelow;
      $(elBelow).trigger(e);
      $elOrg.show();
      return false;
    };
    Polyfill.prototype.destroy = function(){
      $(document).off(this.getEventNames());
      this.isEnabled = false;
    };
    window.pointerEventsPolyfill = function(userOptions){
      return new Polyfill(userOptions);
    };
  })(jQuery);
  $(function(){
    window.pointerEventsPolyfill();
  });

  $(".__JsShowArticle").click(function(){
    $(".popUp_article").addClass("popUp_articleAnimation");
    $(".wrapperShell").addClass("wrapperShellFadeOut");
  });
  $(".closeIco").click(function(){
    $(".popUp_article").removeClass("popUp_articleAnimation");
    $(".wrapperShell").removeClass("wrapperShellFadeOut");
  });

  $(".JsAutorization").click(function(){
    $(".popupIn").css({"display":"block"});
  });
  $(".closeIco").click(function(){
    $(".popupIn").css({"display":"none"});
  });
  
  $("._Rec").click(function(){
    $(".popUp_passRec").css({"display":"block"});
  });
  $(".closeIco").click(function(){
    $(".popUp_passRec").css({"display":"none"});
  });
  $("._jsAcc").click(function(){
    $(".popUp_App").css({"display":"block"});
  });
  $(".closeIco").click(function(){
    $(".popUp_App").css({"display":"none"});
  });
  $("._Reg").click(function(){
    $("._RegPopUp").css({"display":"block"});
    $(".popupIn").css({"display":"none"});
  });
  $(".closeIco").click(function(){
    $("._RegPopUp").css({"display":"none"});
  });
  $(".addServicesIco").click(function(){
    $(".popUp_addServices").css({"display":"block"});
  });
  $(".closeIco").click(function(){
    $(".popUp_addServices").css({"display":"none"});
  });
  $(function(){
    $("#date").mask("99.99.9999",{placeholder: "дд.мм.гггг"});
  });
  $(window).resize(function() {
    var width = $(window).width();
    if (width < 993){
      $(".JSChecknp").removeClass("np");
      $(".JSChecknpr").removeClass("npr");
      $(".jsmdContentCenter").removeClass("justify-content-between").addClass("justify-content-center");
      $(".jsPositionBlockH3").each(function(){
        $(this).parent(".servicesList_padR").parent(".servicesBlock").find(".servicesList_padL").prepend($(this));
      });
      $(".servicesList_padR").removeClass("greyLine");
      $(".jsPositionBlockH3").addClass("h3js");

    }
    else{

      $(".JSChecknp").addClass("np");
      $(".JSChecknpr").addClass("npr");
      $(".jsmdContentCenter").removeClass("justify-content-center").addClass("justify-content-between");

      $(".jsPositionBlockH3").each(function(){
        $(this).parent(".servicesList_padL").parent(".servicesBlock").find(".servicesList_padR").prepend($(this));
      });
      $(".servicesList_padR").addClass("greyLine");
      $(".jsPositionBlockH3").removeClass("h3js");
    }
  });
  $(window).resize();
//изменяет отображение контента
function changeView(){
  $(".list").click(function(){
    $(".eventsBlock__item").each(function(){
      $(this).find(".b").appendTo(this);
      $(this).find(".a").appendTo(this);
    });
    $(".eventsBlock__item").css({"min-height":"70px","display":"flex","align-items":"center","justify-content":"space-between","padding":"0 60px"});
    $(".b, .a").css({"position":"relative","bottom":"0","left":"0"});
    $(".hover").removeClass("col-md-6 col-lg-3");
    $(".event__img, .event__date").css({"display":"none"});
    $(".grey").css({"background-color":"#ebebeb"});
  });
  $(".masonry").click(function(){
    $(".eventsBlock__item").css({"min-height":"380px","display":"block","align-items":"normal","justify-content":"normal","padding":"0 0"});
    $(".b, .a").css({"position":"absolute","bottom":"10px","left":"10px"});
    $(".hover").addClass("col-md-6 col-lg-3");
    $(".event__date").css({"display":"block"});$(".event__img").css({"display":"block"});
    $(".event__date").css({"display":"block"});
    if(navigator.userAgent.search(/IE/)>0){
      $(".event__img").css({"display":"block"});
    }
    else{      
      $(".event__img").css({"display":"flex"});
    };
    
    $(".grey").css({"background-color":"#fff"});
    
    $(".event__img").each(function(){
      $(this).parent(".eventsBlock__item").find(".b").appendTo($(this));
      $(this).parent(".eventsBlock__item").find(".a").appendTo($(this));
    });
  });
}
changeView();
$(".phone_header").click(function(){
  $(".hint").toggle();
});
 
$(".regular").slick({
 dots: true,
 infinite: true,
 slidesToShow: 3,
 slidesToScroll: 1,
 centerMode: true,
 responsive: [
 {
  breakpoint: 1770,
  settings: {
   slidesToShow: 3,
   slidesToScroll: 1,
   dots: true
 }
},
{
  breakpoint: 1390,
  settings: {
   slidesToShow: 2,
   slidesToScroll: 1,
   dots: true
 }
},
{
  breakpoint: 1000,
  settings: {
   slidesToShow: 1,
   slidesToScroll: 1
 }
},
{
  breakpoint: 525,
  settings: {
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '150',
  }
}

]
});
var time = 2, cc=1;
// $(window).scroll(function(){
//  $('#counter').each(function(){
//   var 
//   cPos=$(this).offset().top,
//   topWindow=$(window).scrollTop();
//   if(cPos<topWindow+800){
//    if(cc<2){
//     $('._s').each(function(){
//      var 
//      i = 1,
//      num = $(this).data('num'),
//      // 
//      step = 1000* time / num,
//      that = $(this),
//      int = setInterval(function(){
//       if (i <= num) {
//        that.html(i);
//      }
//      else {
//        cc=cc+2;
//        clearInterval(int);
//      }

//      i++;
//    },step);
//    });};
//   };
//   if(cPos<topWindow+800){
//    if(cc<2){
//     $('._f').each(function(){
//      var 
//      f = 0,
//      num = $(this).data('num'),
//      // 
//      step = 10,
//      that = $(this),
//      int = setInterval(function(){
//       if (f <= num) {
//        that.html(f);
//      }
//      else {
//        cc=cc+2;
//        clearInterval(int);
//      }

//      f=f+10;
//    },step);
//    });};
//   };
// });
// });
});