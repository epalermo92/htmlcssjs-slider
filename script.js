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
    dotsUpdate();
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
    dotsUpdate();
  });
}

function dotsUpdate(){
  var imgs = $("img");
  var activeIndex;

  for (var i = 0; i < imgs.length; i++) {
    if (imgs.eq(i).hasClass("active")) {
      activeIndex = i;
    }
  }

  var oldDot = $(".dots-link-container > i.fas");

  oldDot.removeClass("fas").addClass("far");
  var dots = $(".dots-link-container > i");
  dots.eq(activeIndex).removeClass("far").addClass("fas");
}

function dotClick(){
  var dots = $(".dots-link-container > i");
  var imgs = $("img");

  dots.click(function () {
    var me = $(this);
    var dotIndex = me.index();
    
  });
}

function init(){
  rightClick();
  leftClick();
  dotClick();
}

$(document).ready(init);
