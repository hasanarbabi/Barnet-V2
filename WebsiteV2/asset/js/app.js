

$.ajax({
    type: "POST",
    dataType: 'json',
    data: {},
    contentType: 'application/json; charset=utf-8',
    url: "http://217.11.29.130:88/get_load_requests",
    success: function (res) {
        console.log(res);
        for (i = 0; i < res.length; i++) {

            // let item ="";


            // item+="<div class='item rect p-2 my-2'>";
            //                 item+="<div class='row'>
            //                 item+="<div class='col d-flex align-items-center'>
            //                 item+="<div class='mx-1 dot1'></div>
            //                 item+=" <div class='mx-2 fs3'>شهر مبدا</div>
            //                 item+=" <div class='fs4'>استان مبدا</div>
            //                 item+="</div>
            //                 item+="</div>
            //                 item+=" <div class='row'>
            //                 item+="<div class='col d-flex align-items-center py-1'>
            //                 item+="   <div class='mx-1 dot2'></div>
            //                 item+="  <div class='mx-2 fs3'>شهر مقصد</div>
            //                 item+=" <div class='fs4'>استان مقصد</div>
            //                 item+=" </div>
            //                 item+="</div>
            //                 item+=" <div class='row'>
            //                 item+=" <div class='col'>
            //                 item+="<div class='fs5 rect2 d-flex align-items-center justify-content-center py-1'>نوع خودرو درخواستی</div>
            //                 item+=" </div>
            //                 item+=" </div>
            //                 item+="<div class='row'>
            //                 item+="<div class='col'>
            //                 item+=" <div class='fs5 d-flex align-items-center p-1'>نوع بار</div>
            //                 item+="</div>
            //                 item+=" </div>
            //                 item+="<div class='row'>
            //                 item+="<div class='col'>
            //                 item+=" <div class='fs6 rect3 d-flex align-items-center justify-content-center py-1'>وضعیت</div>
            //                 item+=" </div>
            //                 item+=" </div>
            //             </div>


            $(".owl-carousel").append('<div class="item rect p-2 my-2"><div class="row"><div class="col d-flex align-items-center"><div class="mx-1 dot1"></div><div class="mx-2 fs3">' + res[i].source_location._shahr.shahrname + '</div><div class="fs4">' + res[i].source_location._ostan.provincename + '</div></div></div><div class="row"><div class="col d-flex align-items-center py-1"><div class="mx-1 dot2"></div><div class="mx-2 fs3">' + res[i].destination_location._shahr.shahrname + '</div><div class="fs4">' + res[i].destination_location._ostan.provincename + '</div></div></div><div class="row"><div class="col"><div class="fs5 rect2 d-flex align-items-center justify-content-center py-1">' + res[i].vehicle_requested_type.t_name + '</div></div></div><div class="row"><div class="col"><div class="fs5 d-flex align-items-center p-1">' + res[i].load_type.tname + '</div></div></div><div class="row"><div class="col"><div class="fs6 rect3 d-flex align-items-center justify-content-center py-1">' + res[i].status_persian + '</div></div></div></div>');

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