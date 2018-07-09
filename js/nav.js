$(function() { // DOM ready

$('.navigation').fadeOut(0);
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
    $(this).siblings('.nav-dropdown').toggle();
    // Close one dropdown when selecting another
    $('.nav-dropdown').not($(this).siblings()).hide();
    e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
    $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
    $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
    this.classList.toggle('active');
    });

    var setw=document.body.clientWidth;
    $('.navigation').css('width',setw+'px');

}); // end DOM ready

$(window).resize(function(){
    var setw=document.body.clientWidth;
    $('.navigation').css('width',setw+'px');
})

$(document).scroll(function(){

    var scroll=$(this).scrollTop();
    
    var vph=document.body.clientHeight;
    if(scroll>(2*vph))
    {
        $('.navigation').fadeIn(300);
        
    }
    if(scroll<(2*vph))
    {
        $('.navigation').fadeOut(100);

    }
})
