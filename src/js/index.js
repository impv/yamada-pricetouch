"use strict";
const $ = require("jquery");

$(function() {
    // スキャンの状態を切り替える
    $("#changeStatus").on("click",function() {
        $(".scan").toggleClass('done');
    });
});