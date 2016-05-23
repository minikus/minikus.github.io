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

//naver

$("nav").naver({
	//maxWidth: "768px"
	maxWidth: "600px"
});

