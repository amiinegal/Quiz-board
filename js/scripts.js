$(document).ready(function() {

  $("form#formOne").submit(function(event){
  var qN1 = $("input:radio[name=language]:checked").val();
  var qN2 = $("input:radio[name=block]:checked").val();
  var qN3 = $("input:radio[name=bdd]:checked").val();
  var qN4 = $("input:radio[name=mine]:checked").val();
  var qN5 = $("input:radio[name=kal]:checked").val();


  $("form#formOne").slideUp();
  $("#yourScore").show();
    event.preventDefault();
   });

});
