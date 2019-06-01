using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DnDBuilder.Models
{
	public class Races
	{
		int count;
		int index;

		public int Count { get => count; set => count = value; }
		public int Index { get => index; set => index = value; }

		public IList<Results> Results { get; set; } 
	}

	public class Results
	{
		string name;

		public string Name { get => name; set => name = value; }
	}


	
}