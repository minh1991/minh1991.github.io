$(document).ready(function(){
    //next
    $('.new-control-next').click(function (event) { 
        var _next=$('.active').next();
        //console.log(_next.length);
        if(_next.length==0){
            $('.active').addClass('turn-left').one('webkitAnimationEnd', function(event){
                $('.turn-left').removeClass('turn-left');
            });
            $('.top-new-img .new-img:first-child').addClass('turn-right').one('webkitAnimationEnd', function(event){
                $('.active').removeClass('active');//cắt active
                $('.turn-right').addClass('active').removeClass('turn-right');//ảnh sau thành active
            });

        }else{
            $('.active').addClass('turn-left').one('webkitAnimationEnd', function(event){
                $('.turn-left').removeClass('turn-left');
            });
            _next.addClass('turn-right').one('webkitAnimationEnd', function(event){
                $('.active').removeClass('ative');
                $('.turn-right').addClass('active').removeClass('turn-right');
            });
        }
    });
})

//prew
$('.new-control-prew').click(function(event){
    var _prew = $('.active').prev();
    if(_prew == 1){
        $('.active').addClass('turn-right').one('webkitAnimationEnd', function(event){
            $('.turn-right').removeClass('turn-right');
        });
        _prew.addClass('turn-left').one('webkitAnimationEnd', function(event){
            $('.active').removeClass('ative');
            $('.turn-left').addClass('active').removeClass('turn-left');
        });
    }
})

        // control li
//click chuyển hover
$('.top-new-control ul li').click(function(event){
    $('.top-new-control ul li').removeClass('control-active');// xóa hết nút hover
    $(this).addClass('control-active'); //chuyển hover sang nút đã click
//chuyển ảnh
$('.active').addClass('turn-right').one('webkitAnimationEnd', function(event){
    $('.turn-right').removeClass('turn-right');
}); //xóa ảnh iện tại
    console.log($(this).index() + 1);//vị trí nút
    $('.top-new-img .new-img:nth-child('+$(this).index() + 1+')').addClass('turn-left').one('webkitAnimationEnd', function(event){
        $('.active').removeClass('ative');
        $('.turn-left').addClass('active').removeClass('turn-left');
    });
});


/*_prew.addClass('turn-left').one('webkitAnimationEnd', function(event){
    $('.active').removeClass('ative');
    $('.turn-left').addClass('active').removeClass('turn-left');
});*/


