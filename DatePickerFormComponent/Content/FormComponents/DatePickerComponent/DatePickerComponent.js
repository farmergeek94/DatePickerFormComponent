(function ($) {
    var self = this;
    this.loadFunction = function () {
        // Check for jQuery
        if (window.jQuery) {
            // Check for the datepicker.  If not found load manually.
            if (window.jQuery.datetimepicker) {
                $(".datepicker").datetimepicker();
            } else {
                $.ajaxSetup({
                    cache: true
                });
                $.getScript("/Content/FormComponents/DatePickerComponent/datetimepicker/jquery.datetimepicker.js").done(function (script, textStatus) {
                    $(".datepicker").datetimepicker();
                });
            }
        } else {
            console.log("jQuery not found. Waiting for load 2 seconds.");
            setTimeout(2000, this.loadFunction);
        }
    };
    if (document.readyState === "loading") {
        // Calls the function during the 'DOMContentLoaded' event, after the HTML document has been completely loaded
        document.addEventListener("DOMContentLoaded", function () {
            self.loadFunction();
        });
    } else {
        // Calls the function directly in cases where the component is rendered dynamically after 'DOMContentLoaded' has occurred
        self.loadFunction();
    }
})(jQuery);