alert( "Handler for .click() called." );

  $("#brain").hover(function(){
    $(.brain).addClass("hovered");
  });

  $( "#brain" ).click(function() {
    alert( "Handler for .click() called." );
  });