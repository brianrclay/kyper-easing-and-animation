$('.toggle-drawer').click(function(){
    $('.drawer').toggleClass('open');
})

$('.close-drawer, .close').click(function(){
    $('.drawer').removeClass('open');
})


$('.show-modal').click(function(){
    $('.modal-1, .modal-overlay').addClass('open');
    $('body, html').css('overflow', 'hidden');
});

$('.show-modal-2').click(function(){
    $('.modal-2, .modal-overlay').addClass('open');
    $('body, html').css('overflow', 'hidden');
});

$('.modal-overlay, .modal .close, .modal .close-modal').click(function(){
    closeModal();
});

$('.error-input').keyup(function(){
    $(this).parent('.input-wrapper').addClass('error');

    if(!$(this).val()){
        $(this).parent('.input-wrapper').removeClass('error');
    }
});

function closeModal(){
    $('.modal, .modal-overlay').removeClass('open');
    $('.modal').css('top', 'unset');
    $('body, html').css('overflow', 'auto');
    console.log('fired')
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
