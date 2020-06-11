$('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
          .attr('placeholder','');
}).blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
});


$('form').on('submit', function(e){
  $("#submit").addClass("clicked", validate());

// Ajax for submitting the form goes here, however removed in this demo as we're not submitting anything

  // var that = $(this),
  // url = that.attr('action'),
  // type = that.attr('method'),
  // data = {};
  //
  // that.find('[name]').each(function(index, value) {
  //   var that = $(this),
  //   name = that.attr('name');
  //   value = that.val();
  //
  //   data[name] = value;
  // });
  //
  // $.ajax({
  //   url: url,
  //   type: type,
  //   data: data,
  //   success: function(response){
  //     validate();
  //   }
  // });
  //
  return false;
});

validate = () => {
  setTimeout(() => {
    $("#submit").removeClass("clicked");
    $("#submit").addClass("validated", reset());
    $('#form-message').text('Thanks! Your rsvp was submitted.');
  }, 2500);
};

reset = () => {
  setTimeout(() => {
    $("#submit").removeClass("validated");
    $('#form-message').text('');
    $('form')[0].reset();
  }, 4500);
};
