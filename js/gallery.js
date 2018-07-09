var j=0;
var i=0
var start1=0;
var start2=0;
/* Typewriter */

var txt = 'Proem Week';
    
function typeWriter1() {
  
  if (j < txt.length) {
    document.getElementById('proem').innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter1, 100);
  }
}

var txt2 = 'Frosh Week';
    
function typeWriter2() {
  
  if (i < txt2.length) {
    document.getElementById('frosh').innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter2, 100);
  }
}

$(document).scroll(function(){

    scrollv=$(this).scrollTop();
    var h=$(window).height()/1.8;
    var condition=$('#gallery').offset().top-h;
    var condition2=$('#myCarousel').offset().top;
    condition2+=100;
    if((scrollv>condition)&&(start1==0))
    {
        start1=1;
        setTimeout(function(){
        typeWriter1();
        },500);
    }   

    if((scrollv>condition2)&&(start2==0))
    {
        start2=1;
        setTimeout(function(){
        typeWriter2();
        },400);
    }   
    if(scrollv>condition)
    {
        $('#g_head').css({'transform':'translateY(0)','opacity':'1'});
        $('#g_txt').css({'transform':'translateX(0)','opacity':'1'});
    }
    if(scrollv<condition)
    {
        $('#g_head').css({'transform':'translateY(-40px)','opacity':'0'});
        $('#g_txt').css({'transform':'translateX(50px)','opacity':'0'});
    }

})