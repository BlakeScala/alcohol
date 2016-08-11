$(document).ready(function() {
  $("#qform").submit(function(event) {
    var q1Input = parseInt($("select#q1").val());
    var q2Input = parseInt($("select#q2").val());
    var q3Input = parseInt($("select#q3").val());
    var q4Input = parseInt($("select#q4").val());
    var q5Input = parseInt($("select#q5").val());
    event.preventDefault()

    var total = (q1Input + q2Input + q3Input + q4Input + q5Input);

    if (total < 9) {
      $("#strawberrita").show();
      $("#jack").hide();
      $("#everclear").hide();
    }
    else if (total >= 9 && total <= 12) {
      $("#strawberrita").hide();
      $("#jack").show();
      $("#everclear").hide();
    }

    else if (total >= 13) {
      $("#strawberrita").hide();
      $("#jack").hide();
      $("#everclear").show();
    }
  });
});
