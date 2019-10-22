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
    $('.modal, .modal-overlay').removeClass('open');
    $('body, html').css('overflow', 'auto');
});

$('.error-input').keyup(function(){
    $(this).parent('.input-wrapper').addClass('error');

    if(!$(this).val()){
        $(this).parent('.input-wrapper').removeClass('error');
    }
});