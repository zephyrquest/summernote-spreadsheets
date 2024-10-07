using System.Web;
using System.Web.Mvc;

namespace summernote_webix_spreadsheet_integration
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
