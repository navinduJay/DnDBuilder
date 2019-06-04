<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="UpdateAllCharacters.aspx.cs" Inherits="DnDBuilder.UpdateAllCharacters" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Update Characters</title>
        <style>
        table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
}

td, th {
  border: 0px solid ;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: white;
}
    </style>
    <script src="Character.js"></script>
     <script src="Index.js"></script>
    
</head>

<body>
    <h1>Character Database</h1>
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
            <hr />
            <br />
            <div>
            <h1>Update Character Details</h1>
            


                

            <h4>Search by Character's Name to Load Details</h4>
              
                
            <p>
            </p>
            
                 <table>
                      <tr>
                        <td><input type="text" id="searchName" value="" placeholder="Character Name"/></td>
                        <td> <input type="button" onclick="searchCharacter()" name="name" value="Search Character" /> </td>
                    </tr>
                    <tr>
                     <td><asp:Label Text="Name" runat="server" /></td>
                     <td> <input type="text" id="name" value="" /> </td>
                      <td style="color:red"> <h3 id="nameError"></h3> </td>
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
                                 <asp:ListItem Text="Male" Value="Male"></asp:ListItem>
                                 <asp:ListItem Text="Female" Value="Female"></asp:ListItem>
                                 <asp:ListItem Text="Shemale" Value="Shemale"></asp:ListItem>
                            </asp:DropDownList>
                             
                            </td>
                    </tr>
                      <tr>
                        <td><asp:Label Text="Biography" runat="server" /></td>
                        <td><asp:TextBox ID="bio" TextMode="MultiLine" runat="server"></asp:TextBox></td>
                    </tr>
                      <tr>
                        <td><asp:Label Text="Level" runat="server" /></td>
                        <td> <input type="text"  id="level" oninput="getEntry()" placeholder="Level" /></td>
                            <td> <h4 id="levelError" style="color:orangered"></h4> </td>
                    </tr>


                     <tr>
                        <td><asp:Label Text="Race" runat="server" /></td>
                        <td>    
                            <!--
                              <select id="race">
                            <option></option>
                            </select>
                            -->
                            <asp:DropDownList  ID="race" runat="server">
                                 <asp:ListItem></asp:ListItem>
                            </asp:DropDownList>
                        </td>
                         

                    </tr>
                    <tr>
                        <td><asp:Label Text="Class"  runat="server" /></td>
                        <td>
                             
                              <select id="class" onchange="getEntry()">
                            <option></option>
                            </select>

                           
                           
                        </td>

                          
                        

                    </tr>
                   
                    <tr>
                        <td><asp:Label Text="Is a Spellcaster?" runat="server" /></td>
                         <td> <p style="color:red;" id="isASpellcaster">NO </p></td>
                         <td> 
                             
                         </td>
                    </tr>

                     <tr>
                        <td><asp:Label Text="Hit Score: " runat="server" /></td>
                         <td> <p id="cScore">12</p></td>
                    </tr>

                    <tr>
                       
                         <td> <input type="button" id="abutton" onclick="updateCharacter()"  value="Save Character" /> </td>
                          <td> <input type="button" id="abuttontwo" onclick="deleteCharacter()"  value="Delete Character" /> </td>
                    </tr>
                </table>


      
        </div>

            
        </div>
    </form>
</body>
</html>
