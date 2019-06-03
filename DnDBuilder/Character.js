
function getCharacterInfo() {

   let name = document.getElementById('name').value;
   let age = document.getElementById('txtAge').value;
   let gender = document.getElementById('DropDownList1').value;
   let bio = document.getElementById('bio').value;
   let level = document.getElementById('level').value;
   let race = document.getElementById('race').value;
   let classs = document.getElementById('class').value;
   let spellCaster = document.getElementById('isASpellcaster').textContent;
   let hitScore = document.getElementById('cScore').textContent;

    /*
   console.log(name);
   console.log(age);
   console.log(gender);
   console.log(bio);
   console.log(level);
   console.log(race);
   console.log(classs);
   console.log(spellCaster);
   console.log(hitScore);

    */

    let xhr = new XMLHttpRequest();

    let dest = '/DnD/Char/Add';

    xhr.open('POST', dest, true);

    console.log('hi');

    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Response-type", "application/json");

    var character = {
        "name": name,
        "age": age,
        "gender": gender,
        "bio": bio,
        "level": level,
        "race": race,
        "class": classs,
        "spellCaster": spellCaster,
        "hitScore": hitScore
    };



    xhr.send(JSON.stringify(character));


}


function viewCharacters() {

    let cName = document.getElementById('cName');
    let xhr = new XMLHttpRequest();
    let dest = '/DnD/Char/View/List';
    let table = document.getElementById('table');
    xhr.open("GET", dest, false);

    xhr.onreadystatechange = function () {

    var retVal = JSON.parse(this.responseText);
        //left-char right-race

       // console.log(retVal[3][1]);
       console.log(retVal);

      


        
        

        for (var i = 1; i < retVal[i][0].length; i++) {

            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = retVal[i][0];
            cell2.innerHTML = retVal[i][1]
            cell3.innerHTML = retVal[i][2];
            cell4.innerHTML = retVal[i][3];
           
        }
     
        

        
           


        
        

        
    }

    xhr.send();


}