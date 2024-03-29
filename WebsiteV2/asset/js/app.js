
$.ajax({
    type: "POST",
    dataType: 'json',
    data: {},
    contentType: 'application/json; charset=utf-8',
    url: "http://217.11.29.130:88/get_load_requests",
    success: function (res) {
        console.log(res);
        for (i = 0; i < res.length; i++) {

            switch (res[i].status) {
                case 0:
                    status = "recti"
                    break;
                case 1:
                    status = "rectd"
                    break;
                case 2:
                    status = "rectd"
                    break;
                case 3:
                    status = "rectd"
                    break;
                case 4:
                    status = "rects"
                    break;
                case 5:
                    status = "rectf"
                    break;
                case -1:
                    status = "rects"
                    break;
                case -2:
                    status = "rectf"
                    break;
                case -3:
                    status = "recti"
                    break;
                case 10:
                    status = "rectf"
                    break;
                default:
                    status = "rectf"
            };

            let item = '';
            item += '<div class="item rect p-2 my-2">';
            item += '<div class="row">';
            item += '<div class="col d-flex align-items-center">';
            item += '<div class="mx-1 dot1"></div>';
            item += `<div class="mx-2 fs3">${res[i].source_location._shahr.shahrname}</div>`;
            item += `<div class="fs4">${res[i].source_location._ostan.provincename}</div>`;
            item += '</div>';
            item += '</div>';
            item += '<div class="row">';
            item += '<div class="col d-flex align-items-center py-1">';
            item += '<div class="mx-1 dot2"></div>';
            item += `<div class="mx-2 fs3">${res[i].destination_location._shahr.shahrname}</div>`;
            item += `<div class="fs4">${res[i].destination_location._ostan.provincename}</div>`;
            item += '</div>';
            item += '</div>';
            item += '<div class="row">';
            item += '<div class="col">';
            item += `<div class="fs5 rect2 d-flex align-items-center justify-content-center py-1">${res[i].vehicle_requested_type.t_name}</div>`;
            item += '</div>';
            item += '</div>';
            item += '<div class="row">';
            item += '<div class="col">';
            item += `<div class="fs5 d-flex align-items-center p-1">${res[i].load_type.tname}</div>`;
            item += '</div>';
            item += '</div>';
            item += '<div class="row">';
            item += '<div class="col">';
            item += `<div class="fs6 ${status} d-flex align-items-center justify-content-center py-1">${res[i].status_persian}</div>`;
            item += '</div>';
            item += '</div>';
            item += '</div>';

            $(".owl-carousel").append(item);

            if (i == res.length - 1) {
                $(document).ready(function () {
                    $(".owl-carousel").owlCarousel();
                });

                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    rtl: true,
                    // items: 7,
                    loop: true,
                    margin: 20,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        600: {
                            items: 3,
                        },
                        900: {
                            items: 4,
                        },
                        1000: {
                            items: 5,
                        },
                        1200: {
                            items: 6,
                        },
                        1700: {
                            items: 7,
                        }

                    }
                });
            }

        };
    },
    error: function () {
        console.log("error");
    }
});


$(document).ready(function () {
    let type_string = $('.typed').attr('data-type-items').split(', ');
    new Typed('.typed', {
        strings: type_string,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });


    $('.mobile-nav-toggle').click(function () {
        $('#header, #hero').toggleClass('open');
    });
});

AOS.init();

String.prototype.toPersianDigits = function () {
    var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return this.replace(/[0-9]/g, function (w) {
        return id[+w]
    });
}

function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
        .toString()
        .replace(/\d/g, x => farsiDigits[x]);
}

let isruning = false;

function changeColor() {
    index = Math.floor(Math.random() * 572);
    $("#Group_1732").children().children().eq(index).addClass("anim");
};


function h(x) {
    clearInterval(x);
}

let j;

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll > 2000 && scroll < 5000 && !isruning) {
        console.log("trigerd");
        j = setInterval(changeColor, 750);
        isruning = true;
    }
    if ((scroll > 5500 || scroll < 1800) && isruning) {
        console.log("clear");
        isruning = false;
        h(j);
    }

});