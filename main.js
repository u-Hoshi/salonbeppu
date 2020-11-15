$(function(){
        var sp_nav = $('.span--wrap');
        var nav =$('.btn--wrap');
        var main_cover = $('.main_cover');


        sp_nav.on('click',function(){
            nav.slideToggle();
            sp_nav.toggleClass('active');
            main_cover.toggleClass('active');

            //nav以外をタップした時
            if(sp_nav.hasClass('active')){
                main_cover.on('click',function(){
                    sp_nav.removeClass('active');
                    main_cover.removeClass('active');
                    nav.slideUp();
                });
            }
        });

});