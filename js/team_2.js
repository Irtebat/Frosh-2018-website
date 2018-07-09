/* Holder , Cover Centered */

$(document).ready(function(){

    $('.cover').each(function() {
        $(this).css('right',''+($('.m_fig').width() - $(this).width())/2+'px');     
    });

    $('.text').each(function() {
        $(this).css('right',''+($('.m_fig').width() - $(this).width())/2+'px');     
    });

    $('.holder').each(function() {
        $(this).css('right',''+($('.cover').width() - $(this).width())/2+'px');     
    });
    
});

$(window).resize(function(){

    $('.text').each(function() {
        $(this).css('right',''+($('.m_fig').width() - $(this).width())/2+'px');     
    });

    $('.cover').each(function() {
        $(this).css('right',''+($('.m_fig').width() - $(this).width())/2+'px');       
    });
    $('.holder').each(function() {
        $(this).css('right',''+($('.cover').width() - $(this).width())/2+'px');     
    });
});
