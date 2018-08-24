$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll",function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
})


                /*hot*/
$(function(){
    $('.hot-content').isotope({
        itemSelector:'li'
    });
    /*hot-control*/
$('.hot-control ul li a').hover(function(event){
    var category=$(this).data('category');
    var hotTitle = $(this).text();
    $('.hot h1').text(hotTitle);
    $('.hot-content').isotope({filter:category});
    return false;
})
})

