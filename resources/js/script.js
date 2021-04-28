$(document).ready(function () {
  // for the sticky navigation
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "200px",
    }
  );

  // scroll on buttons
  //   1
  $(".js--scroll-to-plans").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1500
    );
  });
  //   2
  $(".js--scroll-to-start").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      800
    );
  });

  // navigation scroll
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  ///don't work as shown!
  //   $(function () {
  //     $("a[href*=#]:not([href=#])").click(function () {
  //       if (
  //         location.pathname.replace(/^\//, "") ==
  //           this.pathname.replace(/^\//, "") &&
  //         location.hostname == this.hostname
  //       ) {
  //         var target = $(this.hash);
  //         target = target.length
  //           ? target
  //           : $("[name=" + this.hash.slice(1) + "]");
  //         if (target.length) {
  //           $("html,body").animate(
  //             {
  //               scrollTop: target.offset().top,
  //             },
  //             1000
  //           );

  //           return false;
  //         }
  //       }
  //     });
  //   });

  // animation on scroll
  //1
  $(".js--wp-1").waypoint(
    function () {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    { offset: "50%" }
  );
  //2
  $(".js--wp-2").waypoint(
    function () {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    { offset: "50%" }
  );
  //3
  $(".js--wp-3").waypoint(
    function () {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    { offset: "50%" }
  );
  //4
  $(".js--wp-4").waypoint(
    function () {
      $(".js--wp-4").addClass("animated pulse");
    },
    { offset: "50%" }
  );

  //   mobile navigation
  $(".js--nav-icon").click(function () {
    const nav = $(".js--main-nav");
    const icon = $(".js--nav-icon i");

    nav.slideToggle(200);
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.removeClass("ion-close-round");
      icon.addClass("ion-navicon-round");
    }
  });
});
