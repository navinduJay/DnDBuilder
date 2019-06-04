
function init() {
    
    let xmlHttp = new XMLHttpRequest();
    let userInput = document.getElementById('TextBox1').value;
    let dest = '/DnD/Char/' + userInput
    
    xmlHttp.open("GET", dest , true);

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                var retVal = JSON.parse(this.responseText);

                console.log(retVal);
                
            }
        }
    }
    xmlHttp.send();    
}

function getRaces() {

    let xmlHttp = new XMLHttpRequest();
    var elementRace = document.getElementById('race');
   
    let dest = '/DnD/Char/Races' 
    xmlHttp.open("GET", dest, true);

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {

                var retVal = JSON.parse(this.responseText);
         
                var totalResult = (retVal.results).length;

                for (let i = 0; i < totalResult; i++) {
                   
                    elementRace.options[i] = new Option(retVal.results[i].name);
                    
                }
            }
        }   
    }
    xmlHttp.send();
    getClasses();
    viewCharacters();

}



function getClasses() {

    getEntry();
    
    let xmlHttp = new XMLHttpRequest();
    let elementClass = document.getElementById('class');

    let dest = '/DnD/Char/Classes'

    xmlHttp.open("GET", dest, true);

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {

                var retVal = JSON.parse(this.responseText);
                var totalResult = (retVal.results).length;

               
                let i = 0;
                for (i ; i < totalResult; i++) {
                    
                    elementClass.options[i] = new Option(retVal.results[i].name);
                   
                }   
            }
        }
    }
    xmlHttp.send();
}

function getEntry() {

    let xmlHttp = new XMLHttpRequest();
    let elementClass = document.getElementById('class').value;
    let spellCasting = document.getElementById('isASpellcaster');


    let entry;

    let dest = '/DnD/Char/Classes'
   
    xmlHttp.open("GET", dest, true);

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {

                var retVal = JSON.parse(this.responseText);

                var totalResult = (retVal.results).length;

                let d;
                let i = 0;

                let req = new XMLHttpRequest();

                switch (elementClass) {
                    case 'Barbarian':
                        entry = 1;
                        break;
                    case 'Bard':
                        entry = 2;
                        break;
                    case 'Cleric':
                        entry = 3;
                        break;
                    case 'Druid':
                        entry = 4;
                        break;
                    case 'Fighter':
                        entry = 5;
                        break;
                    case 'Monk':
                        entry = 6;
                        break;
                    case 'Paladin':
                        entry = 7;
                        break;
                    case 'Ranger':
                        entry = 8;
                        break;
                    case 'Rogue':
                        entry = 9;
                        break;
                    case 'Sorcerer':
                        entry = 10;
                        break;
                    case 'Warlock':
                        entry = 11;
                        break;
                    case 'Wizard':
                        entry = 12;
                        break;
                }


                let dest = '/DnD/Char/Classes/' + entry

                req.open("GET", dest, true);

                req.onreadystatechange = function () {
                    if (req.readyState == 4) {
                        if (req.status == 200) {

                            var retVal = JSON.parse(this.responseText);

                            if (retVal.spellcasting) {
                                spellCasting.style.color = '#0b8457';
                                spellCasting.innerHTML = 'YES'
                            } else {
                                spellCasting.style.color = '#e41749';
                                spellCasting.innerHTML = 'NO'
                            }

                            var x = document.getElementById("level").value;
                            var score = document.getElementById("cScore");
                            var name = document.getElementById('name');
                            var levelError = document.getElementById('levelError');
                            var nameError = document.getElementById('nameError');

                            // level value calculation
                            var result = retVal.hit_die * parseFloat(x);

                            

                           // Javascript string validations

                            if (name == '') {
                                nameError.innerHTML = 'Name can not be empty!';
                            } else {
                                nameError.innerHTML = ''
                            }


                            if (x <= 0 || x > 20) {
                                levelError.innerHTML = 'Level should be a number between 1-20!';
                            } else {
                                levelError.innerHTML = ''
                            }

                            if (isNaN(result)) {
                                score.innerHTML = retVal.hit_die

                            } else if (x <= 0 || x > 20) {
                                score.style.color = '#e41749'
                                score.innerHTML = 'CHECK YOUR LEVEL VALUE';
                            } else {
                                score.innerHTML = result;
                            }
                                             
                   
                        }
                    }
                }
                req.send();
            }
        }
    }
    xmlHttp.send();

}


function viewCharacters() {

    let cName = document.getElementById('cName');

    let xhr = new XMLHttpRequest();
    let dest = '/DnD/Char/View/List';
    let table = document.getElementById('table');
    xhr.open("GET", dest, false);

    xhr.onreadystatechange = function () {

        let retVal = JSON.parse(this.responseText);
        //console.log(retVal[]);
        let newReq = new XMLHttpRequest();
        let newDest = '/DnD/Char/View/Update'



        for (var i = 1;  retVal[i][0].length; i++) {

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


