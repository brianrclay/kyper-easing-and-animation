$('.toggle-drawer').click(function(){
    $('.drawer').toggleClass('open');
})

$('.close-drawer, .close').click(function(){
    $('.drawer').removeClass('open');
})


$('.show-modal').click(function(){
    $('.modal-1, .scrim').addClass('open');
    $('body, html').css('overflow', 'hidden');
});

$('.show-modal-2').click(function(){
    $('.modal-2, .scrim').addClass('open');
    $('body, html').css('overflow', 'hidden');
});

$('.scrim, .modal .close, .modal .close-modal').click(function(){
    closeModal();
});

$('.error-input').keyup(function(){
    $(this).parent('.input-wrapper').addClass('error');

    if(!$(this).val()){
        $(this).parent('.input-wrapper').removeClass('error');
    }
});

function closeModal(){
    $('.modal, .scrim').removeClass('open');
    $('body, html').css('overflow', 'auto');
    if(wWidth <= 500){
        $('.modal').css('top', 'unset');
    }
}

var wWidth = $(window).width();


if(wWidth <= 500){
    $( function() {
        $( ".draggable" ).draggable({ 
            axis: "y", 
            // snap: 'body', snapMode: 'outer',
            stop: function(){
                closeModal()
            } 
        });
    } );
}
