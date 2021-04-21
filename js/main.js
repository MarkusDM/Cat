$(document).ready(function() {
    var menuBtn = $('.top-nav_btn');
    var menu = $('.top-nav_menu');


    menuBtn.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('top-nav_menu__active');

    });


});


$('.scroll_top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $('.scroll_top').addClass('active');
    } else {
        $('.scroll_top').removeClass('active');
    }
});


function confirmMsg(node) {
    return confirm("Кот добавлен в избранное");
}

function myFunc() {
    event.target.src = "/img/ico/Vector.png"
}


function validate(form_id, email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if (reg.test(address) == false) {
        alert('Введите корректный e-mail');
        return false;
    }
}



document.querySelector('.sorting__price').addEventListener("click", () => {
    const elements = document.querySelectorAll('.cat-item');
    const sorted = [...elements].sort((a, b) => {
        const priceElA = a.querySelector(".item-price");
        const priceElB = b.querySelector(".item-price");
        const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
        return getPrice(priceElA) - getPrice(priceElB);
    });
    const resultEl = document.querySelector(".cat-tables");
    resultEl.innerHTML = null;
    sorted.forEach(el => resultEl.appendChild(el));
});

function first() {

    document.getElementById("second_hide").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

    document.getElementById("first").setAttribute("style", "display: none");

    document.getElementById("first_yelloy").setAttribute("style", "display: block");

}

function first_yelloy() {

    document.getElementById("second_hide").setAttribute("style", "display: none");

    document.getElementById("first_yelloy").setAttribute("style", "display: none");

    document.getElementById("first").setAttribute("style", "display: block");

}