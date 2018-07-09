jQuery.fn.center = function () {
    this.css("position","absolute");

    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

$(document).ready(function(){

    $('.heading').each(function() {

        $(this).center();
            
    });

    $('.txt').each(function() {

        $(this).center();
            
    });

    $('.v_container').center();
    $('.v_container_m').center();
    $('.container').center();
    $('.container2').center();

    setInterval(function(){
        
        $('.heading').each(function() {

            $(this).center();
                
        });
    
        $('.txt').each(function() {

            $(this).center();
                
        });
    
        $('.v_container').center();
        $('.v_container_m').center();
        $('.container').center();
        $('.container2').center();
    },500)


})

$(window).resize(function(){

    $('.heading').each(function() {

                $(this).center();
                    
            });
    
    $('.txt').each(function() {

        $(this).center();
            
    });

    $('.v_container').center();
    $('.v_container_m').center();
    $('.container').center();
    $('.container2').center();
});