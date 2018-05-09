$(document).ready(function(){
    //MOVE TO THE NEXT IMAGE
   $("#right-arrow").click(function(){
       var currentImg = $('.active');
       var nextImg = currentImg.next();
       
       if(nextImg.length){
           currentImg.removeClass('active').css('z-index', -10);
           nextImg.addClass('active').css('z-index', 10);
       }else{
           currentImg.removeClass('active').css('z-index', -10);
           $('.slider-img img').first().addClass('active').css('z-index', 10);
           $('ul li').first().addClass('active').css('z-index', 10);
       }
   });
    
    //MOVE TO THE PREVOUS IMAGE
   $("#left-arrow").click(function(){
       var currentImg = $('.active');
       var prevImg = currentImg.prev();
       
       if(prevImg.length){
           currentImg.removeClass('active').css('z-index', -10);
           prevImg.addClass('active').css('z-index', 10);
       }else{
           currentImg.removeClass('active').css('z-index', -10);
           $('.slider-img img').last().addClass('active').css('z-index', 10);
           $('ul li').last().addClass('active').css('z-index', 10);
       }
   });
});