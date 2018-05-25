
/** Изоляция */
var mobile=(/iphone|iemobile|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));



$( document ).ready(function() {


    // burger
    //
    // $(".burger-menu").click(function () {
    //     $(this).toggleClass("menu-on");
    //     $('.mobmenu').toggleClass("open");
    //     $('.header').toggleClass("menu-open");
    //     $('.wrapper, .wrapper-container').toggleClass("menu-open");
    //     $('.trend, .thing').toggleClass("hidden");
    // });



    var swiper = new Swiper('.diary__swipe', {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        longSwipes: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper = new Swiper('.probably__swipe', {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        longSwipes: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



    /// DATEPICKER

    // $( function() {
    //     $( "#datepicker" ).datepicker({
    //         numberOfMonths: 2,
    //         showButtonPanel: true
    //     });
    // } );
    //
    // $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
    //
    // /* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
    // /* Written by Andrew Stromnov (stromnov@gmail.com). */
    // ( function( factory ) {
    //     if ( typeof define === "function" && define.amd ) {
    //
    //         // AMD. Register as an anonymous module.
    //         define( [ "../widgets/datepicker" ], factory );
    //     } else {
    //
    //         // Browser globals
    //         factory( jQuery.datepicker );
    //     }
    // }( function( datepicker ) {
    //
    //     datepicker.regional.ru = {
    //         closeText: "Закрыть",
    //         prevText: "&#x3C;Пред",
    //         nextText: "След&#x3E;",
    //         currentText: "Сегодня",
    //         monthNames: [ "Январь,","Февраль,","Март,","Апрель,","Май,","Июнь,",
    //             "Июль,","Август,","Сентябрь,","Октябрь,","Ноябрь,","Декабрь," ],
    //         monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
    //             "Июл","Авг","Сен","Окт","Ноя","Дек" ],
    //         dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
    //         dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
    //         dayNamesMin: [ "ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ" ],
    //         weekHeader: "Нед",
    //         dateFormat: "dd.mm.yy",
    //         firstDay: 1,
    //         isRTL: false,
    //         showMonthAfterYear: false,
    //         yearSuffix: "" };
    //     datepicker.setDefaults( datepicker.regional.ru );
    //
    //     return datepicker.regional.ru;
    //
    // } ) );



    // flex-Textarea

    $('textarea').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    })





});