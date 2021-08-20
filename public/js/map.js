$('.land').hover (
   function (){
     
      $('.coordinates').html($(this).attr('coordinates-data'));
      $('.coordinates').fadeIn();
      
   },
   function(){
      $('.coordinates').fadeOut(50);
     
     
   }
  
)