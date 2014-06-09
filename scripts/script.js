$(function() {

  var input = $(this),
      position = input.offset(),
      doc = $(document).height(),
      head = $('#title').height(),
      top = $('#dials').offset().top,
      redX = $('#red').offset().left,
      greenX = $('#green').offset().left,
      blueX = $('#blue').offset().left;




// new functionality to get color in single event
// everytime this event is fired it must update the functionality
$('#dials').on('click', function update_color(event) {
  event.stopPropagation();
  // get the postion of the click event
  var posX = event.pageX;
  var posY = Math.round(event.pageY - top);
  var data = [];

  // determine whether the action corresponds to r, g, or b
  if(posX > redX && posX < greenX){
    console.log('this is red');
    var r = posY;

  }
  if(posX > greenX && posX < blueX){
    console.log('this is green');
    var g = posY;

  }
  if(posX > blueX ){
    console.log('this is blue');
    var b = posY;

  }
  data = [r,g,b];
  console.log(data);

})

    //var data = (first,second,third).data
    //console.log(data)


})