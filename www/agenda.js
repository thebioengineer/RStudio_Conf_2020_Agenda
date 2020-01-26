
$(document).ready(function(){
  
  	$('.collapsible').click( function(){
  	  var sibling = $(this).next();
  	  console.log(sibling);
  	  if ( sibling.css("max-height") === "0px" ){
        sibling.css("max-height","none");
      } else {
        sibling.css("max-height","0px");
      } 
  });
});
  