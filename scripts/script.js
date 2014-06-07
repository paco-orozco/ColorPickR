$(function() {

  var input = $(this),
      position = input.offset(),
      doc = $(document).height(),
      head = $('#title').height(),
      top = $('#red').offset().top;


  $('#red').on('click', function(event){
    var y = event.pageY;
    var result = Math.round(y - top);
    console.log("size of h1 is " + head + " point of y on svg is " + y +
                " the top of id red is " + top + " the result is " + result);
  });
})