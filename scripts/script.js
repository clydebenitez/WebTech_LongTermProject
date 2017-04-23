var amountScrolled = 300;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});

$('a.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 700);
  return false;
});

function openNav() {
    document.getElementById("sideNav").style.width = "320px";
    document.getElementById("main").style.marginLeft = "320px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

 // Show/hide contents of topic
$(document).ready(function(){
    $(".hide").click(function(){
        $(this).next('div').fadeToggle("slow");
    });
    $("#htmlButton").click(function(){
      $("#html").show(250);
      $("#css").hide(250);
      $("#js").hide(250);
      // $("#jsSampleCodes").hide(250);
      // $("#html").hide(400);
    });
    $("#cssButton").click(function(){
      $("#html").hide(250);
      $("#css").show(250);
      $("#js").hide(250);
      // $("#jsSampleCodes").hide(250);
    });
    $("#jsButton").click(function(){
      $("#html").hide(250);
      $("#css").hide(250);
      $("#js").show(250);
      // $("#jsSampleCodes").hide(250);
    });
    $("#jsSamplesButton").click(function(){
      $("#html").hide(250);
      $("#css").hide(250);
      $("#js").hide(250);
      $("#jsSampleCodes").show(250);
    });
});

// $(document).ready(function(){
//     $("htmlButton").click(function(){
//         $('#html').fadeToggle("slow");
//     });
// });
// $(document).ready(function(){
//     $("#cssButton").click(function(){
//         $('#html').fadeToggle("slow");
//     });
// });
// $(document).ready(function(){
//     $("#jsButton").click(function(){
//         $('#html').fadeToggle("slow");
//     });
// });


var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});
$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});




var $window = $(window),
       $stickyEl = $('#topicNav'),
       elTop = $stickyEl.offset().top;
       $contentArea = $('#content');


   $window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
        $contentArea.toggleClass('stickyContent', $window.scrollTop() > elTop);
    });