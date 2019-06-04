<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ViewAllCharacters.aspx.cs" Inherits="DnDBuilder.ViewAllCharacters" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>View Character List</title>
    <script src="Character.js"></script>
   <script src="Index.js"></script>
    <style>
        table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
    </style>
</head>
<body>
    <h1>Character List</h1>
    <form id="form1" runat="server">
        <div>
            
    <table id="table" >
  <tr>
    <th>Name</th>
    <th>Race</th>
    <th>Class</th>
    <th>Level</th>
  </tr>
        
  </table>

             <input type="button" id="abutton" onclick="viewCharacters()"  value="Update Information" />

        </div>
    </form>

    
</body>
</html>
