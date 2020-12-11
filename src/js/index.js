"use strict";
const $ = require("jquery");

$(function() {
    // スキャンの状態を切り替える
    $("#changeStatus").on("click",function() {
        $(".scan").toggleClass('done');

        // half modalを表示
        setTimeout(function() {
            $('.half-modal').addClass('is-show');
            $('.overray').addClass('is-show');
        },500)
        
    });

    // half modalを非表示
    $(".close-half-modal").on("click", function() {

        $(".scan").removeClass('done');
        $('.half-modal').removeClass('is-show');
        $('.overray').removeClass('is-show');
    });  
    
    // img-modalの表示/非表示
    $(".open-img-modal").on("click", function() {
        $('.img-modal').addClass("is-show");
        $('body').addClass("show-modal");
    });
    $(".close-img-modal").on("click", function() {
        $('.img-modal').removeClass("is-show");
        $('body').removeClass("show-modal");
    });
});