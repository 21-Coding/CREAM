$(document).ready(function() {
  var creams = ["Chocolate", "Mint", "Peanut Butter", "Sea Salt"];

  creams.forEach(function(cream) {
    $("#list").prepend("<li>" + cream + "</li>")

  });

});
