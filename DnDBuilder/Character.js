
function saveCharacterInfo() {

   let name = document.getElementById('name').value;
   let age = document.getElementById('txtAge').value;
   let gender = document.getElementById('DropDownList1').value;
   let bio = document.getElementById('bio').value;
   let level = document.getElementById('level').value;
   let race = document.getElementById('race').value;
   let classs = document.getElementById('class').value;
   let spellCaster = document.getElementById('isASpellcaster').textContent;
   let hitScore = document.getElementById('cScore').textContent;

 
    let xhr = new XMLHttpRequest();

    let dest = '/DnD/Char/Add';

    xhr.open('POST', dest, true);

    

    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Response-type", "application/json");


    xhr.onreadystatechange = function () {

        let msg = JSON.parse(this.responseText);

        alert(msg);
    }

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

    let retVal = JSON.parse(this.responseText);
       
        let newReq = new  XMLHttpRequest();
        let newDest = '/DnD/Char/View/Update'


       
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


function searchCharacter() {

    let name = document.getElementById('name');
    let race = document.getElementById('race');
    let classs = document.getElementById('class');
    let level = document.getElementById('level');
    let age = document.getElementById('txtAge');
    let gender = document.getElementById('DropDownList1');
    let bio = document.getElementById('bio');
    let spellCaster = document.getElementById('isASpellcaster');
    let hitScore = document.getElementById('cScore');
    let searchName = document.getElementById('searchName').value;



    let xhr = new XMLHttpRequest();

    let dest = '/DnD/Char/Search/' + searchName


    xhr.open("GET", dest, false);



    xhr.onreadystatechange = function () {

        let retVal = JSON.parse(this.responseText);

        if (retVal[1][0] == "No such character!") {

            alert("No such Character!");

        } else {

            name.value = retVal[1][0];
            level.value = retVal[1][4];
            race.value = retVal[1][5];
            classs.value = (retVal[1][6]);
            age.value = retVal[1][1]
            gender.value = retVal[1][2]
            bio.value = retVal[1][3]
            spellCaster.innerHTML = retVal[1][7]
            hitScore.innerHTML = retVal[1][8]

        }

 




    }
    xhr.send();

}

function updateCharacter() {


    let name = document.getElementById('name').value;
    let level = document.getElementById('level').value;
    let race = document.getElementById('race').value;
    let classs = document.getElementById('class').value;
    let age = document.getElementById('txtAge').value;
    let gender = document.getElementById('DropDownList1').value;
    let bio = document.getElementById('bio').value;
    let hitScore = document.getElementById('cScore').textContent;
    let spellCaster = document.getElementById('isASpellcaster').textContent;

    let xhr = new XMLHttpRequest();

    let dest = '/DnD/Char/Update'

    xhr.open("POST", dest, true);

    xhr.onreadystatechange = function () {
        let retVal = JSON.parse(this.responseText);
        alert(retVal);
    }

    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Response-type", "application/json");


    var character = {
        "name": name,
        "level": level,
        "race": race,
        "class": classs,
        "age": age,
        "gender": gender,
        "bio": bio,
        "hitScore": hitScore,
        "spellCaster": spellCaster
       
    };

    xhr.send(JSON.stringify(character));

}

function deleteCharacter() {

    let name = document.getElementById('name').value;
    let xhr = new XMLHttpRequest();

    var result = confirm("Are you sure you want to delete?");
    if (result) {
        let dest = '/DnD/Char/Delete/' + name

        xhr.open("POST", dest, true);

        xhr.onreadystatechange = function () {

            let retVal = JSON.parse(this.responseText);
            alert(retVal);
        }

        xhr.send();

    }
    
    console.log(name);
   
}

function download() {

    let name = document.getElementById('name').value;
    let level = document.getElementById('level').value;
    let race = document.getElementById('race').value;
    let classs = document.getElementById('class').value;
    let age = document.getElementById('txtAge').value;
    let gender = document.getElementById('DropDownList1').value;
    let bio = document.getElementById('bio').value;
    let hitScore = document.getElementById('cScore').textContent;
    let spellCaster = document.getElementById('isASpellcaster').textContent;

    

    
        const blob = new Blob([

            "<Character>" + "\n",
            "Name: " + name + "\n",
            "Age: " + age + "\n",
            "Gender: " + gender + "\n",
            "Biography: " + bio + "\n",
            "Level: " + level + "\n",
            "Race: " + race + "\n",
            "Class: " + classs + "\n",
            "Spellcaster: " + spellCaster + "\n",
            "Hit Score: " + hitScore + "\n",
            "</Character>"

        ], { type: 'text/html' });

        downloadFile(blob, "Character.xml");
 
   
   
    
}

function downloadFile(blob, fileName) {
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = fileName;

    a.click();
}
