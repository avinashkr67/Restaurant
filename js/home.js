// js code for booking form

function validate() {

    let a = document.getElementById('name').value;

    let b = document.getElementById('phone').value;

    let c = document.getElementById('email').value;

    let d = document.getElementById('person').value;

    let e = document.getElementById('date').value;

    if (a == "") {

        document.getElementById('Name').innerHTML = '*';

        return false;

    }

    else if (b == "") {

        document.getElementById('Phone').innerHTML = '*';

        return false;

    }

    else if (c == "") {

        document.getElementById('Email').innerHTML = '*';

        return false;

    }

    else if (d == "") {

        document.getElementById('Person').innerHTML = '*';

        return false;

    }

    else if (e == "") {

        document.getElementById('Date').innerHTML = '*';

        return false;

    }

    else {
        alert("Congrats ! This is demo")
    }

}

// js code for menu bar

$(document).ready(function () {
    $('.menu-bar').click(function () {
        $('.nav-right').toggle();
    })
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $(".scrollup").fadeIn();
    } else {
        $(".scrollup").fadeOut();
    }
})

$(".scrollup").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 800);
    return false;
})

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    })

})
