$(function () {

// Filter 

    const filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');
        
        if (cat === 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function () {
            
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        };
    });

    // Modal 

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    
    modalCall.on("click", function (event) {
        event.preventDefault();
        let modalId = $(this).data('modal');

        $(modalId).addClass('show')
        $("body").addClass('no-scroll')

        setTimeout(function () {

            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });

        }, 200);

    });

    modalClose.on("click", function (event) {
        event.preventDefault();
        let modalParent = $(this).parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {

            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');

        }, 200);


    });

    $(".modal").on("click", function () {
        let $this = $(this)

        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass('no-scroll')

        }, 200);
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });

    //Slider: https://kenwheeler.github.io/slick/

    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    
    $(".slickPrev").on("click", function(event) {
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]')

        currentSlider.slick("slickPrev")
    });

    $(".slickNext").on("click", function(event) {
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]')

        currentSlider.slick("slickNext")
    });

    //Burger 

    const navToggle = $("#navToggle");
    const nav = $("#nav");
    let navLink = $(".nav__link");
    let navHide = $(".intro__inner, .works, .about, .reviews, .news, .footer, .nav__link");

    navToggle.on("click", function (event) {
        event.preventDefault();
        nav.fadeToggle(200).toggleClass("show");
        navLink.css({
            padding_top: ".4rem",
            margin_top: "40rem"
        });
        
        nav.css({
            border_box: "0 5px 10px rgba(@black, .3)"
        });

        navHide.on("click", function () {
            nav.fadeOut(200).toggleClass("show");
        });
    });
});