/*
    ==================================================
    «                                                »
    ==================================================
    « Author: Ionica Bizau                           »
    « COPYRIGHT (C) 2013 IONICA BIZAU                »
    « UNDER GNU LICENSE                              »
    ==================================================
*/

var interval;

$("document").ready(function() {
    $("html").hide().fadeIn(800);
    handlers();
});


function handlers() {
    $(".btn-start").on("click", function() {
        $(".btn-reset").attr("disabled", "");
        $(".btn-start").attr("disabled", "");
        start(function() {
            $(".btn-reset").removeAttr("disabled");
        });
    });

    $(".btn-reset").on("click", function() {
        $(".btn-reset").attr("disabled", "");
        reset(function() {
            $(".btn-start").removeAttr("disabled");
        });
    });

    $(document).on("click", "a", function () {
        var link = $(this).attr("href");
        $("html").fadeOut(800, function () {
            location = link;
        });
        return false;
    });
}

/*
    ===========================================
                START, RESET FUNCTIONS
    ===========================================
*/

function start(callback) {
    $(".first").fadeIn(500, function () {
        $(".second").delay(1000).fadeIn(function () {
            callback();
        });
    });
}

function reset(callback) {
    $(".line").fadeOut(callback);
}
