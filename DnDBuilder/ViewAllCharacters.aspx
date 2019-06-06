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
     <asp:HyperLink NavigateUrl="~/Index.aspx" ID="HyperLink10" runat="server">Home</asp:HyperLink>
    <br /> <br />
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
            <br />
            <asp:HyperLink NavigateUrl="~/UpdateAllCharacters.aspx" ID="HyperLink11" runat="server">Edit Characters</asp:HyperLink>

        </div>
    </form>

    
</body>
</html>
