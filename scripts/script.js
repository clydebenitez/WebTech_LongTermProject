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
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

 // Show/hide contents of topic
$(document).ready(function(){
    $(".hide").click(function(){
        $(this).next('div').fadeToggle("slow");
    });
    $(".htmlButton").click(function(){
      $("#html").show(300);
      $("#css").hide(300);
      $("#js").hide(300);
    });
    $(".cssButton").click(function(){
      $("#html").hide(300);
      $("#css").show(300);
      $("#js").hide(300);
    });
    $(".jsButton").click(function(){
      $("#html").hide(300);
      $("#css").hide(300);
      $("#js").show(300);
    });
    $(".httpButton").click(function(){
      $("#http").show(300);
      $("#requestMethods").hide(300);
      $("#messageHeaders").hide(300);
      $("#statusCode").hide(300);
    });
    $(".requestMethodsButton").click(function(){
      $("#http").hide(300);
      $("#requestMethods").show(300);
      $("#messageHeaders").hide(300);
      $("#statusCode").hide(300);
    });
    $(".messageHeadersButton").click(function(){
      $("#http").hide(300);
      $("#requestMethods").hide(300);
      $("#messageHeaders").show(300);
      $("#statusCode").hide(300);
    });
    $(".statusCodeButton").click(function(){
      $("#http").hide(300);
      $("#requestMethods").hide(300);
      $("#messageHeaders").hide(300);
      $("#statusCode").show(300);
    });
    $(".jspButton").click(function(){
      $("#jsp").show(300);
      $("#servlet").hide(300);
      $("#php").hide(300);
    });
    $(".servletButton").click(function(){
      $("#jsp").hide(300);
      $("#servlet").show(300);
      $("#php").hide(300);
        
    });
    $(".phpButton").click(function(){
      $("#jsp").hide(300);
      $("#servlet").hide(300);
      $("#php").show(300);
    });
});

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
