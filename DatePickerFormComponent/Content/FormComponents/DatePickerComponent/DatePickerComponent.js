function createDatePickerFormComponent(formControl) {
    var htmlContentInput = document.querySelector("[name='" + formControl + "'");
    var datetimepickerOptions = {
        format: 'm/d/Y H:i:s',
        formatDate: 'm/d/Y',
        formatTime: "H:i"
    };
    // Check for jQuery
    if (window.jQuery) {
        // Check for the datepicker.  If not found load manually.
        if (window.jQuery.datetimepicker) {
            $(htmlContentInput).datetimepicker(datetimepickerOptions);
        } else {
            $.ajaxSetup({
                cache: true
            });
            $.getScript("/Content/FormComponents/DatePickerComponent/datetimepicker/jquery.datetimepicker.js").done(function (script, textStatus) {
                $(htmlContentInput).datetimepicker(datetimepickerOptions);
            });
        }
    } else {
        console.log("jQuery not found. Waiting for load 2 seconds.");
        setTimeout(2000, createDatePickerFormComponent(formControl));
    }
}
