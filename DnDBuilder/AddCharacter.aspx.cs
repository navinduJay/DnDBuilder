﻿using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DnDBuilder
{
	public partial class AddCharacter : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			if(!IsPostBack)
				Page.ClientScript.RegisterStartupScript(this.GetType(), "CallMyFunction", "getRaces()", true);
				
		}

		
	}
}
