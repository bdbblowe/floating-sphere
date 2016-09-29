$(document).ready(function(){
   $("#firstParagraph").click(function(){
       $("#firstParagraph").hide()
   });

$("#secondParagraph").click(function(){
      $("#secondParagraph").fadeOut();
});

  for(var x=1; x<=10 ; x++){
    sayName(varName, x);
  }
});

var varName = "Greg";
