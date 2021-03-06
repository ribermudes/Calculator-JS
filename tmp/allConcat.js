var Calculator = require('./../js/ping-pong.js').calculatorModule;

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    var simpleCalculator = new Calculator();
    if (operator === "add") {
      result = simpleCalculator.addition(number1, number2);
    } else if (operator === "subtract") {
      result = simpleCalculator.subtract(number1, number2);
    } else if (operator === "multiply") {
      result = simpleCalculator.multiply(number1, number2);
    } else {
      result = simpleCalculator.divide(number1, number2);
    }
    $("#output").text(result);
  });
});

var Calculator = require('./../js/ping-pong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
