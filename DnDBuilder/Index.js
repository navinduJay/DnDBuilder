
function init() {
    
    let xmlHttp = new XMLHttpRequest();
    let userInput = document.getElementById('TextBox1').value;
    let dest = '/DnD/Char/' + userInput
    //console.log(userInput);
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
    //console.log(element);
    xmlHttp.open("GET", dest, true);

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {

                var retVal = JSON.parse(this.responseText);
         
                //debugger
           
                var totalResult = (retVal.results).length;

                for (let i = 0; i < totalResult; i++) {
                   
                    elementRace.options[i] = new Option(retVal.results[i].name);
                    
                }

            }
        }
       
    }
    xmlHttp.send();
    getClasses();
}



function getClasses() {

    getEntry();
    


    let xmlHttp = new XMLHttpRequest();
    let elementClass = document.getElementById('class');

    let dest = '/DnD/Char/Classes'
    //console.log(element);
    xmlHttp.open("GET", dest, true);

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {

                var retVal = JSON.parse(this.responseText);
                //debugger
                var totalResult = (retVal.results).length;

                let d;
                let i = 0;
                for (i ; i < totalResult; i++) {
                    
                    elementClass.options[i] = new Option(retVal.results[i].name);
                   
                } 
        
                if (elementClass.options[0].value) {

                }
            
            }
        }

    }
    xmlHttp.send();


    
}

function getEntry() {

    
    
  //  debugger
  
    let xmlHttp = new XMLHttpRequest();
    let elementClass = document.getElementById('class').value;
    let spellCasting = document.getElementById('isASpellcaster');
    

   
    let entry;

    let op = document.getElementById('op');
    var id;

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
                                spellCasting.innerHTML = 'YES'
                            } else {
                                spellCasting.innerHTML = 'NO'
                            }

                            var x = document.getElementById("level").value;
                            var score = document.getElementById("cScore");
                            var result = retVal.hit_die * parseFloat(x)
                            score.innerHTML = result;
                         
;
                         
                        }
                    }
                }
                req.send();

            }

        }
    }
    xmlHttp.send();

   

}


