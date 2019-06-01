
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
    let userInput = document.getElementById('TextBox1').value;
    let dest = '/DnD/Char/Races' + userInput
    //console.log(userInput);
    xmlHttp.open("GET", dest, true);

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {

                var retVal = JSON.parse(this.responseText);
         
                //debugger
                var newVar = []

                var totalResult = (retVal.results).length;

                for (let i = 0; i < totalResult ; i++) {
                    console.log(retVal.results[i].name);
                }

            }
        }
       
    }
    xmlHttp.send();
}


