/*global $,jQuery*/

$(function () {
    'use strict';
    var navOffset = $('nav').offset().top;
    $(window).scroll(function () {
        var scrollPos = jQuery(window).scrollTop();

        $('nav').wrap('<div class="nav-placeholder"></div>');
        $('.nav-placeholder').height($('nav').outerHeight());

        if (scrollPos >= navOffset) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });

});
