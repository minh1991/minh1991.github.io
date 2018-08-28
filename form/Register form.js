var code = window.location.href;
var rep = code.replace('=', ':');
console.log(rep);
var ten = rep.slice(code.indexOf('?') +1,code.indexOf('&'));
console.log(ten);
var i = rep.split('&');
var diachi = i[1].replace('=', ':');
var mail = i[2].replace('=', ':');
var phone = i[3].replace('=', ':');
var pass = i[4].replace('=', ':');
var ngaysinh = i[5].replace('=', ':');
var gender= i[6].replace('=', ':');

console.log(diachi);
console.log(mail);
console.log(phone);
console.log(pass);
console.log(ngaysinh);
console.log(gender);
