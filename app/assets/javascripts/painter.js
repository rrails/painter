$(document).ready(function(){

  var add_image = function(){
    var image = $('#image').val();
    var $img = $('<img>');

    $img.attr('src',image);
    $('#images').prepend($img);
    $('#image').val('');
    $('#image').focus();

  }
  $('#add_image').click(add_image);

  var create_paint_boxes = function(boxes){   //creating the canvas of little boxes.
    for (var i = 0; i<boxes; i++) {
      var $paint = $('<div/>').addClass('paint');
      $('#canvas').append($paint);
    }
  };

  create_paint_boxes(5000);

  var paint_box = function(){                 // painting the box from the select color
    if (!event.ctrlKey) return;
    var $box = $(this);
    var color = $('#current1').css('background-color');
    $box.css('background-color',color);
    // $box.css('opacity',0.4);
  };

  $('.paint').click(paint_box);             //click or mouse will color the canvas
  $('.paint').mouseover(paint_box);

  var clear_colors = function() {           // clear the colors
    $('#colors').empty();
    $('#current1').css('background-color','white');
  }

  $('#clear').click(clear_colors);

  var clear_image = function() {           // clear the colors
    $('#current_img').empty();
    $('#images').empty();
    $('#canvas').css('background-image','none');
  }
  $('#clearimg').click(clear_image);

  var add_color = function(){             // add the color to the palette
    var color = $('#color').val();
    var $box = $('<div></div>'); //this is an empty div.
    $box.addClass('box');
    $box.css('background-color', color); //setting color
    $box.text(color);

    $('#colors').prepend($box); // colors is area in index.tml
    $('#color').val(''); // clears the text from the box
    $('#color').focus(); // focuses back on the field.

    console.log(color);
  };

  $('#add_color').click(add_color); //handler

  var set_color = function() {
    var $box = $(this);
    var color = $box.css('background-color'); //getting color
    $('#current1').css('background-color',color);

  };

  var set_image = function(){
    var $img = $(this);
    var image = $img.attr('src');

    $('#img').attr('src', image);
    $('#canvas').css('background-image', 'url(' + image +')');

  }
  // $('.box').click(set_color); - this doesn't work as this happens when the page is loaded. linebelow fixes this.
  $('#colors').on('click', '.box', set_color);
  $('#images').on('click', 'img', set_image);
})