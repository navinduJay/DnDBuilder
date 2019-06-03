using DnDBuilder.Controllers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SQLite;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DnDBuilder
{
	public partial class ViewAllCharacters : System.Web.UI.Page
	{
		
		protected void Page_Load(object sender, EventArgs e)
		{

			if (!IsPostBack)
				Page.ClientScript.RegisterStartupScript(this.GetType(), "CallMyFunction", "viewCharacters()", true);


		}
	}
}