<%@ Page Language="C#" MaintainScrollPositionOnPostBack="true" AutoEventWireup="true" CodeBehind="AddCharacter.aspx.cs" Inherits="DnDBuilder.AddCharacter" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Add a Character</title>
   <script src="Index.js"> </script>
    <script>
       
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h1>Create a New Character</h1>
            

                <table>
                    <tr>
                     <td><asp:Label Text="Name" runat="server" /></td>
                     <td><asp:TextBox ID="txtName" runat="server"></asp:TextBox></td>
                    </tr>
                    <tr>
                   <td> <asp:Label Text="Age" runat="server" /></td> 
                   <td> <asp:TextBox ID="txtAge" runat="server"></asp:TextBox></td> 
                    </tr>
                    <tr>
                        <td><asp:Label Text="Gender" runat="server" /></td>
                        <td>
                            <asp:DropDownList ID="DropDownList1" runat="server">
                                 <asp:ListItem Enabled="true" Text="Select Gender" Value="-1"></asp:ListItem>
                                 <asp:ListItem Text="Male" Value="1"></asp:ListItem>
                                 <asp:ListItem Text="Female" Value="2"></asp:ListItem>
                                 <asp:ListItem Text="Shemale" Value="12"></asp:ListItem>
                            </asp:DropDownList>
                             
                            </td>
                    </tr>
                      <tr>
                        <td><asp:Label Text="Biography" runat="server" /></td>
                        <td><asp:TextBox ID="TextBox1" TextMode="MultiLine" runat="server"></asp:TextBox></td>
                    </tr>
                      <tr>
                        <td><asp:Label Text="Level" runat="server" /></td>
                        <td> <input type="text"  id="level" oninput="getEntry()" placeholder="Level" /></td>
                    </tr>
                     <tr>
                        <td><asp:Label Text="Race" runat="server" /></td>
                        <td>    
                              <select id="race">
                            <option></option>
                            </select>

                        </td>
                         
                         <td colspan="5">
                             <asp:Label Text="Race Description" runat="server" />
                            
                         </td>
                    </tr>
                    <tr>
                        <td><asp:Label Text="Class" runat="server" /></td>
                        <td>
                             
                              <select id="class" onchange="getEntry()">
                            <option></option>
                            </select>
                        </td>

                          
                         <td colspan="5">
                             <asp:Label Text="Class Description" runat="server" />
                            
                         </td>

                    </tr>
                   
                    <tr>
                        <td><asp:Label Text="Is a Spellcaster?" runat="server" /></td>
                         <td> <p id="isASpellcaster">NO</p></td>
                    </tr>

                     <tr>
                        <td><asp:Label Text="Consition Score: " runat="server" /></td>
                         <td> <p id="cScore">12</p></td>
                    </tr>

                    <tr>
                        <td><asp:Label Text=" " runat="server" /></td>
                         <td> <input type="button" id="abutton" name="name" value="Save Character" /> </td>
                    </tr>
                </table>

      
        </div>
    </form>
</body>
</html>
