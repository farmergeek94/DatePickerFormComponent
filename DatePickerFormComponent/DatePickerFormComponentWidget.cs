using Kentico.PageBuilder.Web.Mvc;
using HBS.DatePickerFormComponent.Kentico.MVC;

// Registers the Widget, pointing to the View that is actually compiled and located in the DatePickerFormComponent.View project.
[assembly: RegisterWidget("HBS.DatePickerFormComponent", "Sample widget", typeof(DatePickerFormComponentWidgetModel), customViewName: "Widgets/_DatePickerFormComponent")]

// FOR TESTING
// You can change the registration to point to a local View (non compiled) in order to debug.  
// This particular view is on my MVC Project, NOT my compiled DatePickerFormComponent.View project
//[assembly: RegisterWidget("HBS.DatePickerFormComponent", "Sample widget", typeof(DatePickerFormComponentWidgetModel), customViewName: "Widgets/_DatePickerFormComponent_Test")]
