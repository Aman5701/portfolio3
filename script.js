$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    // Smooth Scrolling

    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
           scrollTop : $($(this).attr('href')).offset().top, 
        },
        500,
        'linear'
        );
    });

});




// Animate on Scroll

let sections = document.querySelectorAll('section');

window.onscroll=()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });
}
