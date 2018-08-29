
$('#form-register').on('submit', function(){
    var isValid = true
    //tên
    if($('#name').val().trim() == ''){
        $('#name').next('span').text('tên không được bỏ trống');
        isValid = false;
    } else{
        $('#name').next('span').text('');
    }
    //địa chỉ
    if($('#dia-chi').val().trim() == ''){
        $('#dia-chi').next('span').text('địa chỉ không được bỏ trống');
        isValid = false;
    } else{
        $('#dia-chi').next('span').text('');
    }
    //email
    if($('#email').val().match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) == null){
        $('#email').next('span').text('Hãy nhập địa chỉ mail hợp lệ.\nExample@gmail.com');
        isValid = false;
    } else{
        $('#email').next('span').text('');
    }

    //điện thoại
    if($('#phone').val().match(/^[0-9]+$/) == null){
        $('#phone').next('span').text('nhập bằng số');
        isValid = false;
    } else{
        $('#phone').next('span').text('');
    }
    return isValid;
});