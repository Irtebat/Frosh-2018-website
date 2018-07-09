$(document).scroll(function() {

    // Slide Arrow fade In And Out
    var scroller=$(window).scrollTop();
    
    if(scroller>200)
    {
    $('.slider').fadeOut(10);
    }
    if(scroller<200)
    {
    $('.slider').fadeIn(10);
    }
})  