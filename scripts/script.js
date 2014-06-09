$(function() {

  var input = $(this),
      position = input.offset(),
      doc = $(document).height(),
      head = $('#title').height(),
      top = $('#dials').offset().top,
      redX = $('#red').offset().left,
      greenX = $('#green').offset().left,
      blueX = $('#blue').offset().left,
      data = [],
      rgb = 'rgb(0,0,0)';

  // new functionality to get color in single event
  // everytime this event is fired it must update the functionality
  $('#dials').on('click', function update_color(event) {
    event.stopPropagation();
    // get the postion of the click event
    var posX = event.pageX;
    var posY = Math.round(event.pageY - top);

    // determine whether the action corresponds to r, g, or b
    if(posX > redX && posX < greenX){
      console.log('this is red');
      var r = posY;
      data.push(r);
    }
    if(posX > greenX && posX < blueX){
      console.log('this is green');
      var g = posY;
      data.push(g);
    }
    if(posX > blueX ){
      console.log('this is blue');
      var b = posY;
      data.push(b);
    }

    console.log(data);

    // keep track of the values that are being fired
    if(data[data.length - 1] == r && (posX > redX && posX < greenX)){
      rVal = data.pop();
      console.log('red space ' + 'and pop is ' + rVal);
    }
    if(data[data.length - 1] == g && (posX > greenX && posX < blueX)){
      gVal = data.pop();
      console.log('green space  ' + 'and pop is '+ gVal);
    }
    if(data[data.length - 1] == b && (posX > blueX)){
      bVal = data.pop();
      console.log('blue space ' + 'and pop is '+ bVal);
    }
    finalR = typeof(rVal) !== 'undefined' ? rVal : 0;
    finalG = typeof(gVal) !== 'undefined' ? gVal : 0;
    finalB = typeof(bVal) !== 'undefined' ? bVal : 0;
    // append the values in the correct manner
    $('#color').css('background-color', 'rgb(' + finalR + ',' + finalG + ',' + finalB + ')');
  })


})