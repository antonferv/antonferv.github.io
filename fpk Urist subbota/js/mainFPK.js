$(document).on('ready', function() {

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

    }
    else{
      $(".JSChecknp").addClass("np");
      $(".JSChecknpr").addClass("npr");
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
   $(".event__date").css({"display":"block"});$(".event__img").css({"display":"flex"});
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
  breakpoint: 1450,
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
$(window).scroll(function(){
 $('#counter').each(function(){
  var 
  cPos=$(this).offset().top,
  topWindow=$(window).scrollTop();
  if(cPos<topWindow+800){
   if(cc<2){
    $('div').each(function(){
     var 
     i = 1,
     num = $(this).data('num'),
     step = 1000 * time / num,
     that = $(this),
     int = setInterval(function(){
      if (i <= num) {
       that.html(i);
     }
     else {
       cc=cc+2;
       clearInterval(int);
     }
     i++;
   },step);
   });};
  };
});
});
});