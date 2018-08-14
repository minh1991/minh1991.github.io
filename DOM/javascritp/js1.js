//function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
function changeFontSize(x){
    document.getElementById("p1").style.fontSize=x + "px";
    document.getElementById("p2").style.fontSize=x + "px";
    document.getElementById("p3").style.fontSize=x + "px";
}
//function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn (paragraph) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).
function increaseFontSize(p){
    var x=document.getElementById(p);
    var size = x.style.fontSize;
   if (parseInt(size) <30 ){
       x.style.fontSize = parseInt(size) +1 +'px';}
    }
 //function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn (paragraph) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.
 function decreaseFontSize(p){
    var x=document.getElementById(p);
    var size = x.style.fontSize;
    if (parseInt(size)>10){
    x.style.fontSize = parseInt(size)-1 + "px";}
 }
 //function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
 function changeColo(){
    document.getElementById("p1").style.color= "#008B00";
    document.getElementById("p2").style.color="#FFFF00";
    document.getElementById("p3").style.color="#ff0000";
 }
 //function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
 function changeBgColor(){
     document.body.style.background = "#FFB5C5";
 }
 //function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2.
 function copyContent(paragraph1, paragraph2){
    document.getElementById(paragraph1).textContent = document.getElementById(paragraph2).textContent;
}


