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

// Dropdown

$('.dropdown-toggle').click(function(){
    $(this).parent('.dropdown').toggleClass('open');
    $('.dd-scrim').toggleClass('open');
})

$('.dd-scrim').click(function(){
    $('.dropdown').removeClass('open');
    $('.dd-scrim').removeClass('open');
})

$('.dropdown-item').click(function(){
    // var dropdownToggleText = $(this).parents('.dropdown').find('.toggle-label');
    var itemText = $(this).find('.item-inner').text();
    $(this).parents('.dropdown').find('.toggle-label').text(itemText);
    $(this).parents('.dropdown').find('.dropdown-item').removeClass('active')
    $(this).addClass('active');
    $(this).parents('.dropdown').removeClass('open');
    $('.dd-scrim').removeClass('open');
});

$(document).ready(function(){
    $('.dropdown-menu').each(function(){
        if(!$(this).find('.item-inner').hasClass('active')){
            $('.')
        }
    })
})