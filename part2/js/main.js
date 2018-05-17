/*eslint-env browser*/

$(document).ready(function(){
    //MOVE TO THE NEXT IMAGE
   $("#right-arrow").click(function(){
       var currentImg = $('.active');
       var nextImg = currentImg.next();
       
       if(nextImg.length){
           currentImg.removeClass('active');
           nextImg.addClass('active');
       }else{
           currentImg.removeClass('active');
           $('.slider-img img').first().addClass('active');
           $('ul li').first().addClass('active');
       }
   });
    
    //MOVE TO THE PREVOUS IMAGE
   $("#left-arrow").click(function(){
       var currentImg = $('.active');
       var prevImg = currentImg.prev();
       
       if(prevImg.length){
           currentImg.removeClass('active');
           prevImg.addClass('active');
       }else{
           currentImg.removeClass('active');
           $('.slider-img img').last().addClass('active');
           $('ul li').last().addClass('active');
       }
   });
    
    
    //DISPLAY IMAGES SELECTED 
    var currentImg = 1;
    $('li').click(function(e){
        //console.log(this);
        $('li').removeClass('active');
        $(this).addClass('active');
        
        
        currentImg = $(this).index()+1;
        $('.slider-img img').removeClass('active').fadeOut();
        $('.slider-img img:nth-of-type('+currentImg+')').addClass('active');
    });
});






