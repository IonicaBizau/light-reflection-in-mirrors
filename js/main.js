$("document").ready(function() {

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

    function handlers() {
        $(".btn-start").on("click", function() {
            $(".btn-reset").attr("disabled", "");
            $(".btn-start").attr("disabled", "");
            start(function() {
                $(".btn-reset").removeAttr("disabled");
            });
        });

        $(".btn-back").on("click", function() {
            location = "/";
        });

        $(".btn-reset").on("click", function() {
            $(".btn-reset").attr("disabled", "");
            reset(function() {
                $(".btn-start").removeAttr("disabled");
            });
        });
    }

    handlers();
});
