$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  items: 1,
  dots: false,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],
});

function visible(partial) {
  var $t = partial,
    $w = jQuery(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

  return (
    compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible")
  );
}

$(window).scroll(function () {
  if (visible($(".count-digit"))) {
    if ($(".count-digit").hasClass("counter-loaded")) return;
    $(".count-digit").addClass("counter-loaded");

    $(".count-digit").each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate(
        { Counter: $this.text() },
        {
          duration: 5000,
          easing: "swing",
          step: function () {
            $this.text(Math.ceil(this.Counter));
          },
        }
      );
    });
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".sticky").addClass("fixed");
  } else {
    $(".sticky").removeClass("fixed");
  }
});

// scroll to top js
var btn = $(".to_top");
btn.hide();
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.fadeIn();
  } else {
    btn.fadeOut();
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
