using Kentico.PageBuilder.Web.Mvc;
using HBS.DatePickerFormComponent.Kentico.MVC;
using Kentico.Forms.Web.Mvc;
using System;

[assembly: RegisterFormComponent(DatePickerComponent.IDENTIFIER, typeof(DatePickerComponent), "Date Picker", Description = "Date Picker", IconClass = "icon-paragraph")]

namespace HBS.DatePickerFormComponent.Kentico.MVC
{
    public class DatePickerComponent : FormComponent<DatePickerComponentProperties, DateTime?>
    {
        public const string IDENTIFIER = "DatePickerComponent";

        [BindableProperty]
        public DateTime? SelectedDateTime { get; set; } = DateTime.Now;

        public override DateTime? GetValue()
        {
            return SelectedDateTime;
        }

        public override void SetValue(DateTime? value)
        {
            SelectedDateTime = value;
        }
    }
}