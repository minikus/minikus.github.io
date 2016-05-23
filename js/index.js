/*smoothscroll*/

$(function() {
  $('nav a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});


/*header dropshadow*/

var header = $('.header');

$(window).scroll(function(e){
    if(header.offset().top !== 0){
        if(!header.hasClass('shadow')){
            header.addClass('shadow');
        }
    }else{
        header.removeClass('shadow');
    }
});


/*show the about section */

function moreInfo() {
	$('#top-border').slideToggle(1500);
/* 	$("#more-info").fadeIn(); */

/* 			$(window).scrollTop(0); */

}

$('.about-button').click(moreInfo);




/*this switches + - */
function changeButton() {
	$('#button-2').slideToggle(0);
	/*$(".hidden-info").fadeIn(); */

/* 		$(window).scrollTop(0); */

}

$('#button-1').click(changeButton);


function changeButton2() {
	$('#button-1').slideToggle(0);
	/*$(".hidden-info").fadeIn(); */

/* 		$(window).scrollTop(0); */

}

$('#button-2').click(changeButton);



/*this hides hidden info*/
function hideit() {
	$('.hidden-info').slideToggle(1100);
	/*$(".hidden-info").fadeIn(); */

/* 		$(window).scrollTop(0); */

}

$('#button-2').click(hideit);





/* show more hidden info*/

function showMore() {
	$('.hidden-info').slideToggle(1100);
	/*$(".hidden-info").fadeIn(); */

/* 		$(window).scrollTop(0); */

}

$('#button-1').click(showMore);



/*show the contact section*/

function getInfo() {
	$('#contact').slideToggle(1500);

}

$('.contact-button').click(getInfo);



/*classy social*/

(function () {
	'use strict';

	$('.classysocial').ClassySocial();

}());





/*sticky the .work */
/*
$(document).ready(function(){
    $(".work").sticky({topSpacing:-1130});
  });

*/

/*
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1220) {
    $('.screenshot').fadeIn();
  } else {
    $('.screenshot').fadeOut();
  }
});
*/



/*normal article stick*/

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 2297) {
    $('.screenshot').css('visibility', 'visible');
  } else {
    $('.screenshot').css('visibility', 'none');
  }
});

/*
$(document).ready(function(){
    $(".screenshot").sticky({topSpacing:0});
  });
*/



var sticky = new Waypoint.Sticky({
  element: $('.screenshot')[0]
})




/*big article stick*/

/*
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1800) {
    $('.screenshot-big').css('visibility', 'visible');
  } else {
    $('.screenshot-big').css('visibility', 'none');
  }
});
*/

/*
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1800) {
    $('.screenshot-big').css('display', 'block');
  } else {
    $('.screenshot-big').css('display', 'none');
  }
});

var sticky = new Waypoint.Sticky({
  element: $('.screenshot-big')[0]
})
*/


/*
$(document).ready(function(){
    $(".screenshot-big").sticky({topSpacing:0});
  });
*/



/*show photo*/

function getPhoto() {
	$('#photo').slideToggle(1500);
/* 	$("#more-info").fadeIn(); */

/* 			$(window).scrollTop(0); */

}

$('.photo-button').click(getPhoto);


/*show Gray*/

function getGray() {
	$('#gray').slideToggle(1500);
/* 	$("#more-info").fadeIn(); */

/* 			$(window).scrollTop(0); */

}

$('.gray-button').click(getGray);



/*--------------------cover-----------------------------*/

/*
$(document).ready(function() {

		var id = '#dialog';

		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();

		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		//transition effect
		$('#mask').fadeIn(1000);
		$('#mask').fadeTo("fast",0.8);

		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();

		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);

		//transition effect
		$(id).fadeIn(3000);

	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();

		$('#mask').hide();
		$('.window').hide();
	});

	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});

});
*/



//naver

$("nav").naver({
	//maxWidth: "768px"
	maxWidth: "600px"
});


