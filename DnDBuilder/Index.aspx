<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="DnDBuilder.Index" %>
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Index.js"> </script>
    <script src="Character.js"> </script>
   
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h1>Welcome to DnDBuilder</h1>
           
          
            <h1>Navigation</h1>
            
          <asp:HyperLink NavigateUrl="~/AddCharacter.aspx" ID="HyperLink2" runat="server">Create a Character</asp:HyperLink>
            <br /> <br />
          <asp:HyperLink NavigateUrl="~/ViewAllCharacters.aspx" ID="HyperLink1" runat="server">View Character List</asp:HyperLink>
                 <br /> <br />
          <asp:HyperLink NavigateUrl="~/UpdateAllCharacters.aspx" ID="HyperLink3" runat="server">Update Characters</asp:HyperLink>
        </div>
        
    </form>



</body>
</html>
