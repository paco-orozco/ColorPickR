$(function() {

  var input = $(this),
      position = input.offset();

  var $red = $('<svg height="306" width="306">'+
                  '<defs>'+
                    '<linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">'+
                      '<stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:1" />'+
                      '<stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />'+
                    '</linearGradient>'+
                  '</defs>'+
                  '<circle id="red" cx="153" cy="153" r="153" fill="url(#grad1)" />'+
                '</svg>');

  $('body').append($red.fadeIn('slow'));

  // var get_color = function(pick){
  //   var position = pick.pageY;
  //   console.log(position);
  // }

  $('#red').on('click', function(event){
    console.log('position f Y is ' + event.pageY);
    var result = Math.round(event.pageY * .83333331) - 6;
    console.log(result);
  });
})