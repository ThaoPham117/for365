$(document).ready(function() {

  // Radio box border
  $('.method').on('click', function() {
    $('.method').removeClass('blue-border');
    $(this).addClass('blue-border');
  });

  // Validation
  var $cardInput = $('.input-fields input');

  $('.next-btn').on('click', function(e) {

    $cardInput.removeClass('warning');

    $cardInput.each(function() {
       var $this = $(this);

       if (!$this.val()) {
         $this.addClass('warning');
       }
    });

  });

});

function confirm(){
  let show ;
  let a = document.getElementById("cardholder").value;
  let b = document.getElementById("date").value;
  let c =  document.getElementById("verification").value;
  let d = document.getElementById("cardnumber").value;
 
  if (a == "" || b == "" || c == "" || d == "") {
    show = "Input not valid";
  
  } else {
    show = "Thanks for purchasing";
    window.location.href = "../Shop/shop.html"
  }
 alert(show);

}
