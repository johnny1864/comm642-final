$(document).ready(function () {
    'use strict';

    function tabs() {
        $('#tab-content div').hide();
        $('#tab1').show();
        $('a').click(displayTab);
        $('a').hover(function(){
            
        }, function(){
            
        });
    }

    function displayTab(e) {
        $('#tabs li').removeClass('active');
        if (e.target.id === 'to-tab1') {
            $('#tab-content div').hide();
            $('#tab1').show();
            $(this).parent().addClass('active');
        } else if (e.target.id === 'to-tab2') {
            $('#tab-content div').hide();
            $('#tab2').show();
            $(this).parent().addClass('active');
        } else if (e.target.id === 'to-tab3') {
            $('#tab-content div').hide();
            $('#tab3').show();
            $(this).parent().addClass('active');
        }
    }

    tabs();


    function accordion() {
        $('button').addClass('plus');
        $('button').click(function (e) {
            var parent = $(this).parent()[0].id;
            $(this).toggleClass('clicked');
            $(`#${parent} p `).slideToggle(500);
            
            //TOGGEL PLUS AND MINUS IMAGES
            $(this).toggleClass('plus');
            $(this).toggleClass('minus');
        });
    }

    accordion();
});
