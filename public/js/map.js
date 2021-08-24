jQuery(document).ready(function(){
$('.land').click(
   function (){
      
      $('.coordinates').html($(this).attr('coordinates-data'));
      $('.coordinates').fadeIn();
      $('html, body').animate({
         scrollTop: $('.coordinates').offset().top 
     });
     
     

  

   })
  
 
  });
