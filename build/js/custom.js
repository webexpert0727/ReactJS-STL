jQuery(document).ready(function(){
    $('.slider-1 .image-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        asNavFor: '.slider-1 .detail-container'
        });
    $('.slider-1 .detail-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.slider-1 .image-container',
        fade: true,
        centerMode: true,
        focusOnSelect: true
        });


    var iScrollPos = 0;
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= (jQuery(".menu-containter" ).parent().next().offset().top - jQuery(".menu-containter" ).outerHeight() ) ) {
            $(".menu-containter").addClass("darkHeader");
        }else{
            
            $(".menu-containter").removeClass("darkHeader");
        }

        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > 199) {
            if (iCurScrollPos > iScrollPos) {
                //Scrolling Down
                jQuery(".menu-containter").addClass("hided");
            } else {
            //Scrolling Up
                jQuery(".menu-containter").removeClass("hided");
            }
        }
        iScrollPos = iCurScrollPos;
    });

    jQuery(".menu-list-toggle").click(function(){
        //jQuery(".menu-list").slideToggle();
        jQuery(".menu-list").fadeToggle();
        jQuery(this).toggleClass("open");
    });

   
    jQuery(document).mouseover(function(){
        if( jQuery(window).width() > 991){
            jQuery(this).find(".sub-menu").fadeOut();
        }
    });
    jQuery(".has-sub-menu").mouseover(function(e){
        if( jQuery(window).width() > 991){
            jQuery(this).find(".sub-menu").fadeIn();
        }
        e.stopPropagation();
    });
    jQuery(".has-sub-menu > span").click(function(e){
        e.stopPropagation();
        jQuery(this).siblings(".sub-menu").slideToggle();
        jQuery(this).toggleClass("opened");
    });
    
    jQuery(".sub-menu").mouseover(function(e){
        e.stopPropagation();
    });
    

    jQuery(".xzoom, .xzoom-gallery").xzoom({
        position: "lens",
        smoothLensMove: 1,
        scroll: true,
        lensShape: "circle"
    });

    jQuery(".image-thumb").click(function(){
        jQuery(this).addClass("active");
        jQuery(this).siblings().removeClass("active");
    });

    jQuery(".popup-type-1 .close-popup").click(function(){
        jQuery(this).parent().parent().removeClass("open");
        jQuery("body").removeClass("type-1-open");
        jQuery(".popup-overlay-type-1").removeClass("type-1-open");
    });

    jQuery(':input[type=file].profile-image').change( function(event) {
        var tmppath = URL.createObjectURL(event.target.files[0]);
        jQuery(this).next("img").attr('src',tmppath);
    });
    /* range slider */ 
    jQuery( "#price" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#range-min" ).val( "$" + ui.values[ 0 ] );
            $( "#range-max" ).val( "$" + ui.values[ 1 ] );
        }
    });
    $( "#range-min" ).val( "$" + $("#price").slider( "values", 0 ));
    $("#range-max").val("$" + $("#price").slider( "values", 1 ) );

    
    jQuery( "#distance" ).slider({
        range: true,
        min: 0,
        max: 1040,
        values: [ 10, 999 ],
        slide: function( event, ui ) {
            $( "#distance-min" ).val( "$" + ui.values[ 0 ] );
            $( "#distance-max" ).val( "$" + ui.values[ 1 ] );
        }
    });
    $( "#distance-min" ).val( "$" + $( "#distance" ).slider( "values", 0 ));
    $("#distance-max").val("$" + $( "#distance" ).slider( "values", 1 ) );

    
    /* end range slider */ 

    // owl carousel 

    if($(".horizontal-img.owl-carousel").length > 0){
        $(".horizontal-img.owl-carousel").owlCarousel({
            loop:true,
            mergeFit: 0,
            nav: 0,
            responsive:{
                0:{
                    items:1,
                    nav:0
                },
                500:{
                    items:2,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:0,
                    loop:false
                }
            }
        });
    }
    if($(".flight_time.owl-carousel").length > 0){
        $(".flight_time.owl-carousel").owlCarousel({
            loop:false,
            mergeFit: 0,
            nav: 0,
            responsive:{
                0:{
                    items:1,
                    nav:0
                },
                1000:{
                    items:1,
                    nav:0
                }
            }
        });
    }
    
    // end owl carousel

    jQuery(".layout-switch-btn a.detail-layout-button").click(function(){
        jQuery(this).addClass("active");
        jQuery(this).siblings().removeClass("active");
        jQuery(".detail-layout").show("slow");
        jQuery(".grid-layout").hide("slow");
    });
    jQuery(".layout-switch-btn a.grid-layout-button").click(function(){
        jQuery(this).addClass("active");
        jQuery(this).siblings().removeClass("active");
        jQuery(".detail-layout").hide("slow");
        jQuery(".grid-layout").show("slow");
    });
    jQuery(".edit-input").click(function(){
        jQuery(this).siblings("input, textarea").removeAttr("readonly");
        jQuery(this).parent().addClass("remove-readonly");
    });


    jQuery(".chat-popup .heading").click(function(){
        jQuery(this).parent().toggleClass("open");
        jQuery(this).next().slideToggle();
    });
    
    $(".full-height").css({
        "min-height" :jQuery(window).height() - jQuery("footer").outerHeight() +"px"
    });
    jQuery("#edit-profile").click(function(){        
        if($(this).text() == "Save changes"){
            $(this).text("Edit profile");
        }else{
            $(this).text("Save changes");
        }
        $(".edit-input").fadeToggle();
    });
    
    jQuery(".user-list .users").click(function(){
        if(jQuery(window).width() < 992){
            jQuery(".user-list").hide("slow");
            jQuery(".chat-area").show("slow");
        }
    });
    jQuery(".chat-area .heading").click(function(){
        if(jQuery(window).width() < 992){    
            jQuery(".user-list").show("slow");
            jQuery(".chat-area").hide("slow");
        }
    });

    var dH = jQuery("body").height();
    var wH = jQuery(window).height();
    if(dH < wH ){
        jQuery("body").css({
            "min-height": wH+"px"
        });
        jQuery("footer").css({
            "position": "absolute",
            "left": "0",
            "right": "0",
            "bottom": "0"
        });
    }
    // date picker

    $( function() {
        var dateFormat = "mm/dd/yy",
        from = $( ".date-picker.check-in" )
            .datepicker({
            defaultDate: "+1w",
            minDate: 0
            })
            .on( "change", function() {
            to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( ".date-picker.check-out" ).datepicker({
            defaultDate: "+1w"
        })
        .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
        });
    
        function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }
    
        return date;
        }
    } );

    
    $( function() {
        var dateFormat = "mm/dd/yy",
        from = $( ".date-picker.depart" )
            .datepicker({
            defaultDate: "+1w",
            minDate: 0
            })
            .on( "change", function() {
            to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( ".date-picker.return" ).datepicker({
            defaultDate: "+1w"
        })
        .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
        });
    
        function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }
    
        return date;
        }
    } );

    // end date picker
    jQuery(document).click(function(e){
        jQuery(".edit-guest").fadeOut();
    });
    jQuery("input.guest").focusin(function(e){
        e.stopPropagation();
        jQuery(this).next(".edit-guest").fadeIn();
    });
    jQuery("input.guest").click(function(e){
        e.stopPropagation();
    });
    jQuery(".edit-guest").click(function(e){
        e.stopPropagation();
    });
    jQuery(".edit-guest > div").children("a.add").click(function(){
        if ($(this).next().val() < 10) {
            $(this).next().val(+$(this).next().val() + 1);
        }
    });
    jQuery(".edit-guest > div").children("a.sub").click(function(){
        if ($(this).prev().val() > 0) {
            $(this).prev().val(+$(this).prev().val() - 1);
        }
    });
    jQuery(".edit-guest .adult a").click(function(){
        var guest = " Adult"
        if(jQuery(this).siblings("input").val() > 0){
            var guest = " Adults";
        }
        jQuery(this).siblings("label").text( jQuery(this).siblings("input").val()+guest );

        if(jQuery(".edit-guest .children input").val() > 0){
            jQuery(this).parent().parent().siblings(".guest").val(
                jQuery(".adult label").text()+", "+jQuery(".children label").text()
            );
        }else{
            jQuery(this).parent().parent().siblings(".guest").val(
                jQuery(".adult label").text()
            );
        }
    });
    jQuery(".edit-guest .children a").click(function(){
        var guest = " Children"
        if(jQuery(this).siblings("input").val() > 0){
            var guest = " Childrens";
        }
        jQuery(this).siblings("label").text( jQuery(this).siblings("input").val()+guest );
        
        if(jQuery(".edit-guest .children input").val() > 0){
            jQuery(this).parent().parent().siblings(".guest").val(
                jQuery(".adult label").text()+", "+jQuery(".children label").text()
            );
        }else{
            jQuery(this).parent().parent().siblings(".guest").val(
                jQuery(".adult label").text()
            );
        }
    });

// custom country select
    jQuery(".currency_selected").click(function(){
        jQuery(".currency_toggle").slideToggle();
    });

    jQuery(".currency_select").each(function(){
        jQuery(this).click(function(){
            jQuery(".currency_selected").html(
                jQuery(this).html()
            );
            jQuery(".currency_toggle").slideToggle();
        });
    });

    
});