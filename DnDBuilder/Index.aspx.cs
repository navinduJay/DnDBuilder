using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DnDBuilder
{
	public partial class Index : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{

		}

		protected void btn_Click(object sender, EventArgs e)
		{
			Page.ClientScript.RegisterStartupScript(this.GetType(), "CallMyFunction", "init()", true);
		}
	}
}