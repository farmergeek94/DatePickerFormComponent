function createDatePickerFormComponent(formControl) {
    var htmlContentInput = document.querySelector("[name='" + formControl + "'");

    // Check for jQuery
    if (window.jQuery) {
        // Check for the datepicker.  If not found load manually.
        if (window.jQuery.datetimepicker) {
            $(htmlContentInput).datetimepicker();
        } else {
            $.ajaxSetup({
                cache: true
            });
            $.getScript("/Content/FormComponents/DatePickerComponent/datetimepicker/jquery.datetimepicker.js").done(function (script, textStatus) {
                $(htmlContentInput).datetimepicker();
            });
        }
    } else {
        console.log("jQuery not found. Waiting for load 2 seconds.");
        setTimeout(2000, createDatePickerFormComponent(formControl));
    }
}