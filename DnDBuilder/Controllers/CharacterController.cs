﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace DnDBuilder.Controllers
{
    public class CharacterController : ApiController
    {
	
        // PUT: api/Character/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Character/5
        public void Delete(int id)
        {
        }

		[HttpGet]
		[Route("DnD/Char/{userInput}")]
		public string LoadJSON(int userInput)
		{
			string result = "";

			try {
				string strurtest = String.Format("http://www.dnd5eapi.co/api/monsters/" + userInput);
				WebRequest requestObjectGet = WebRequest.Create(strurtest);
				requestObjectGet.Method = "GET";
				HttpWebResponse responseObjectGet = null;
				responseObjectGet = (HttpWebResponse)requestObjectGet.GetResponse();

				result = null;
				using (Stream stream = responseObjectGet.GetResponseStream())
				{
					StreamReader streamReader = new StreamReader(stream);
					result = streamReader.ReadToEnd();
					streamReader.Close();

				}
				

			}
			catch (WebException ex) {

				Console.WriteLine(ex);
			}
			return result;
			
		}


		[HttpGet]
		[Route("DnD/Char/Races")]
		public string LoadRaces()
		{
			string result = "";

			try
			{
				string strurtest = String.Format("http://www.dnd5eapi.co/api/races/");
				WebRequest requestObjectGet = WebRequest.Create(strurtest);
				requestObjectGet.Method = "GET";
				HttpWebResponse responseObjectGet = null;
				responseObjectGet = (HttpWebResponse)requestObjectGet.GetResponse();

				result = null;
				using (Stream stream = responseObjectGet.GetResponseStream())
				{
					StreamReader streamReader = new StreamReader(stream);
					result = streamReader.ReadToEnd();
					streamReader.Close();

				}


			}
			catch (WebException ex)
			{

				Console.WriteLine(ex);
			}
			return result;

		}



	}


}
