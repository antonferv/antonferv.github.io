
		$(document).ready(function(){
			var clock;
			clock=$(".regBlock__clock").FlipClock({
				clockFace:"DailyCounter",
				// TwentyFourHourClock
				autostart:false,
				showSeconds: false,
				showMinuts:false,
			});
			var target="June 25 2018 20:22:48";
			var date = new Date(target);
			var currDate=Date.now();
			var rem= date-currDate;
			rem/=1000;
			clock.setTime(rem);
			clock.setCountdown(true);
			clock.start();

			$(function(){
				$(".play").click(function(){
					var dataYt=$(this).parents(".wrapperVideo").attr("data-youtube");
					console.log(dataYt);
					$(this).parents(".wrapperVideo").html('<iframe src="https://www.youtube.com/embed/'+ dataYt +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
				});
			});
			wow = new WOW ( 
			{ 
                      boxClass: 'wow', // default 
                      animateClass: 'animated', // default 
                      offset: 100, // default 
                      mobile: true, // default 
                      live: true // default 
                  } 
                  ) 
			wow.init();
			var flat = $("#flat").flipster({
				style: 'flat',
				spacing: -0.2,
				nav: true,
				buttons: true,
				loop :  true,
				touch :  true
			});
		});