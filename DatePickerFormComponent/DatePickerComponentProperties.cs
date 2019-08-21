using CMS.DataEngine;
using Kentico.Forms.Web.Mvc;
using System;

namespace HBS.DatePickerFormComponent.Kentico.MVC
{
    public class DatePickerComponentProperties : FormComponentProperties<DateTime?>
    {
        [DefaultValueEditingComponent(DatePickerComponent.IDENTIFIER)]
        public override DateTime? DefaultValue
        {
            get;
            set;
        } = null;

        // Initializes a new instance of the RgbInputComponentProperties class and configures the underlying database field
        public DatePickerComponentProperties()
            : base(FieldDataType.DateTime)
        {
        }
    }
}
