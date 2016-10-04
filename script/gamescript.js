// dom content loaded
$(document).ready(function() {
  var player = $('.player');
  var windowWidth = $('body').width();
  var playerWidth = player.width();
  var playerPosition = (windowWidth/2) - (playerWidth/2);
  player.css('left', playerPosition);

  function move(event) {
    var left = player.offset().left;
    var edge = $('body').width() - player.width();

    // 37 => move player to left
    // 39 => move player to right
    if (event.which === 37) {
      // check for left edge
      if (left <= 8) {
        left = 8;
      } else {
        console.log(left);
        player.css('left', left - 15);
      }
    }
    if (event.which === 39) {
      // check for right edge
      if (left >= edge) {
        left = edge;
      } else {
        player.css('left', left + 15);
      }
    }
  }

  // draw divs as burning rocks
  function draw() {
    var edge = $('body').width();
    var sky = $('.rock-container');
    var $newRock = $('<div>');
    $newRock.addClass('rocks');

    // randomize rock's width & height & top & left
    var width =   Math.round((Math.random() * 100) + 50);
    var height =  Math.round((Math.random() * 60) + 30);
    console.log(width, height);
    var top = 0;
    var left = Math.round(Math.random() * (edge - 60));
    console.log(top, left);

    /**
      * Need to make sure the rocks don't overlap
    **/

    $newRock.css({'width': width, 'height': height, 'background-color': 'red', 'display': 'inline-block', 'position': 'absolute', 'top': top, 'left': left});
    sky.append($newRock);

    // make it rain flaming rocks
    fall($newRock);
  }

  // update the rock's top position incrementally
  // incremental value gets higher when the pace increases
  /**
    * the fall() targets ALL rocks
  **/
  function fall(target) {
    // var rocks = $('.rocks');
    var top = target.offset().top;
    var rockTimer = setInterval(function() {
      target.css('top', top + 10);
    }, 500);
  }

  // update periodically to speed up
  function update() {}


  $('body').on('keydown', move)

  // in loop, update and make rocks fall
  // var timerId = setInterval(draw, 2000);

});
