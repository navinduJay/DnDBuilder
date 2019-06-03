
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SQLite;
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


		public void DatabaseConnection() {

			if (!File.Exists("C:\\Users\\Navindu\\source\\repos\\DnDBuilder\\DnDBuilder\\bin\\DnD.sqlite"))
			{
				Console.WriteLine("Just entered to create Sync DB");
				SQLiteConnection.CreateFile("C:\\Users\\Navindu\\source\\repos\\DnDBuilder\\DnDBuilder\\bin\\DnD.sqlite");

				using (var sqlite2 = new SQLiteConnection("Data Source=C:\\Users\\Navindu\\source\\repos\\DnDBuilder\\DnDBuilder\\bin\\DnD.sqlite"))
				{
					sqlite2.Open();
					string sql = "CREATE TABLE characters (name VARCHAR(20) PRIMARY KEY, age VARCHAR(20), gender VARCHAR(20), bio VARCHAR(20), level VARCHAR(20), race VARCHAR(20), class VARCHAR(20), spell_caster VARCHAR(20), hit_points VARCHAR(20), ability_scores VARCHAR(20))";
					SQLiteCommand command = new SQLiteCommand(sql, sqlite2);
					command.ExecuteNonQuery();
				}
			}

		}
	
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

				Console.WriteLine(ex +"WebException Throwed");
			}
			return result;
			
		}

		[HttpGet]
		[Route("DnD/Char/Races")]
		public object LoadRaces()
		{
			string result = null;
			dynamic json = null;

			try
			{
				string strurtest = String.Format("http://www.dnd5eapi.co/api/races/");
				WebRequest requestObjectGet = WebRequest.Create(strurtest);
				requestObjectGet.Method = "GET";
				HttpWebResponse responseObjectGet = null;
				responseObjectGet = (HttpWebResponse)requestObjectGet.GetResponse();

				using (Stream stream = responseObjectGet.GetResponseStream())
				{
					StreamReader streamReader = new StreamReader(stream);
					result = streamReader.ReadToEnd();
					streamReader.Close();

				}

				json = JsonConvert.DeserializeObject(result);
				var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
			
			}
			catch (WebException ex)
			{

				Console.WriteLine(ex + "WebException Throwed");
			}
			catch (ArgumentException ex) {

				Console.WriteLine(ex + "ArgumentException Throwed");
			}

			return json;

		}

		[HttpGet]
		[Route("DnD/Char/Classes")]
		public object LoadClasses()
		{
			string result = null;
			dynamic json = null;

			try
			{
				string strurtest = String.Format("http://www.dnd5eapi.co/api/classes/");
				WebRequest requestObjectGet = WebRequest.Create(strurtest);
				requestObjectGet.Method = "GET";
				HttpWebResponse responseObjectGet = null;
				responseObjectGet = (HttpWebResponse)requestObjectGet.GetResponse();

				using (Stream stream = responseObjectGet.GetResponseStream())
				{
					StreamReader streamReader = new StreamReader(stream);
					result = streamReader.ReadToEnd();
					streamReader.Close();

				}

				json = JsonConvert.DeserializeObject(result);
				var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();

			}
			catch (WebException ex)
			{

				Console.WriteLine(ex + "WebException Throwed");
			}
			catch (ArgumentException ex)
			{

				Console.WriteLine(ex + "ArgumentException Throwed");
			}

			return json;

		}

		[HttpGet]
		[Route("DnD/Char/Classes/{userInput}")]
		public object LoadClassEntry(int userInput)
		{
			string result = null;
			dynamic json = null;

			try
			{
				string strurtest = String.Format("http://www.dnd5eapi.co/api/classes/" + userInput);
				WebRequest requestObjectGet = WebRequest.Create(strurtest);
				requestObjectGet.Method = "GET";
				HttpWebResponse responseObjectGet = null;
				responseObjectGet = (HttpWebResponse)requestObjectGet.GetResponse();

				using (Stream stream = responseObjectGet.GetResponseStream())
				{
					StreamReader streamReader = new StreamReader(stream);
					result = streamReader.ReadToEnd();
					streamReader.Close();

				}

				json = JsonConvert.DeserializeObject(result);
				var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();

			}
			catch (WebException ex)
			{

				Console.WriteLine(ex + "WebException Throwed");
			}
			catch (ArgumentException ex)
			{

				Console.WriteLine(ex + "ArgumentException Throwed");
			}

			return json;

		}


		[HttpPost]
		[Route("DnD/Char/Add")]
		public void AddCharacter() {

			string name;
			string age;
			string gender;
			string bio;
			string level;
			string race;
			string classs;
			string spellCaster;
			string hitPoints;

			try
			{
				Dictionary<string, object> req = (Dictionary<string, object>)Request.Content.ReadAsAsync<Dictionary<string, object>>().Result;
				name = Convert.ToString(req["name"]);
				age = Convert.ToString(req["age"]);
				gender = Convert.ToString(req["gender"]);
				bio = Convert.ToString(req["bio"]);
				level = Convert.ToString(req["level"]);
				race = Convert.ToString(req["race"]);
				classs = Convert.ToString(req["class"]);
				spellCaster = Convert.ToString(req["spellCaster"]);
				hitPoints = Convert.ToString(req["hitScore"]);

			
				

				try
				{
					DatabaseConnection();
					using (SQLiteConnection m_dbConn = new SQLiteConnection("Data Source=C:\\Users\\Navindu\\source\\repos\\DnDBuilder\\DnDBuilder\\bin\\DnD.sqlite"))
					{
						m_dbConn.Open(); //open the connection
						SQLiteCommand checkDb = new SQLiteCommand("SELECT count(*) FROM characters WHERE name='" + name + "'", m_dbConn); //setup the selection query
						int count = Convert.ToInt32(checkDb.ExecuteScalar()); //execute the query and convert the returnedcount to an int.
						if (count == 0)
						{
							SQLiteCommand insertSQL = new SQLiteCommand("INSERT INTO characters(name,age,gender,bio,level,race,class,spell_caster,hit_points) VALUES ('" +name+ "', '" + age + "', '" + gender + "', '" + bio + "', '" + level + "', '" + race + "', '" + classs + "', '" + spellCaster + "', '" + hitPoints + "') ", m_dbConn); //set up the insert command
							
							insertSQL.ExecuteNonQuery(); //execute the command
						}
					}
				}
				catch (Exception e) when (e is SQLiteException || e is InvalidCastException)
				{
					Console.WriteLine(e);
				}

				Console.WriteLine(name);
			}
			catch (System.Web.Http.HttpResponseException ex)
			{
				throw new HttpResponseException(this.Request.CreateResponse<object>(HttpStatusCode.InternalServerError, "Error occurred : " + ex.Message));
			}
			


		}




		[HttpGet]
		[Route("DnD/Char/View/List")]
		public Dictionary<int, List<string>> ViewCharacters()
		{
			Dictionary<int, List<string>> dictionary = new Dictionary<int, List<string>>();
			

			try
			{
				
				using (SQLiteConnection m_dbConn = new SQLiteConnection("Data Source=C:\\Users\\Navindu\\source\\repos\\DnDBuilder\\DnDBuilder\\bin\\DnD.sqlite"))
				{
					m_dbConn.Open();
					string sql = "select * from characters";
					SQLiteCommand command = new SQLiteCommand(sql, m_dbConn);
					SQLiteDataReader reader = command.ExecuteReader();
					var i = 1;
					while (reader.Read())
					{
					
						dictionary.Add(i, new List<string> { (string)reader["name"], (string)reader["race"], (string)reader["class"], (string)reader["level"] });
						i = i + 1;

					}
				}
			}
			catch (Exception e) when (e is NullReferenceException || e is SQLiteException|| e is InvalidCastException)
			{
				Console.WriteLine(e);
			}
			catch(ArgumentException ex)
			{
				Console.WriteLine(ex);
			}

			return dictionary;
		}



	}
}
