const contactBtn = document.getElementById("contact-us-btn");
const contactPopup = document.getElementById("contact-popup");
const closeBtn = document.getElementById("close-popup");

contactBtn.addEventListener("click", function () {
  contactPopup.classList.remove("hidden");
  contactPopup.classList.add("open");
});

closeBtn.addEventListener("click", function () {
  contactPopup.classList.remove("open");
  contactPopup.classList.add("hidden");
});

$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    $("section").each(function () {
      let top = $(window).scrollTop();
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");

      if (top >= offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });
});
