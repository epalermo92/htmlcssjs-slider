function rightClick(){
  var rightArrow = $(".right-arrow");

  rightArrow.click(function () {
    var activeImg = $("img.active");
    var nextImg = activeImg.next("img");

    if (activeImg.hasClass("last")) {
      nextImg = $("img.first");
    }

    activeImg.removeClass("active");
    nextImg.addClass("active");
  });

}

function leftClick(){
  var leftArrow = $(".left-arrow");

  leftArrow.click(function () {
    var activeImg = $("img.active");
    var prevImg = activeImg.prev("img");

    if (activeImg.hasClass("first")) {
      prevImg = $("img.last");
    }

    activeImg.removeClass("active");
    prevImg.addClass("active");
  });
}

function init(){
  rightClick();
  leftClick();
}

$(document).ready(init);
