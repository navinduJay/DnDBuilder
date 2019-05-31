<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="DnDBuilder.Index" %>
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Index.js"> </script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h1>All Characters</h1>
           
            <br /> <br />
            <asp:TextBox id="TextBox1" placeholder="Enter number" runat="server"></asp:TextBox>
            <br /> <br />
             <asp:Button id="btn" Text="Get Character Details" runat="server" OnClick="btn_Click"   />
             <div id="users"></div>

            <br />
            <hr />
            <h1>Navigation</h1>
            
          <asp:HyperLink NavigateUrl="~/AddCharacter.aspx" ID="HyperLink2" runat="server">Create a Character</asp:HyperLink>
            
        </div>
        
    </form>
</body>
</html>
