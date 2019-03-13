var btnMatchesClicked = false;

var Ajax = {

    ajax : null,

    init() {

        if(!this.ajax) { 
            this.ajax = new XMLHttpRequest();
        }
        return this.ajax;
    },

   
    get(url, callback) {
        var request = this.init();
        request.open("GET", url);
        request.send();
        request.onload = () => {
            console.log(request.statusCode);
            callback(JSON.parse(request.responseText));
        };
    },

    post(url, data, callback) {
        request.open("POST", url);
        request.send(data);
        request.onload = () => {
            callback(JSON.parse(request.responseText));
        };

    }
};

var txtMatches = "";
var matches = [];
document.getElementById("getMatches").addEventListener("click", function(){
    if(btnMatchesClicked === false){
        btnMatchesClicked = true;
        Ajax.get("http://worldcup.sfg.io/matches", (info) => {
            //console.log(info);
            txtMatches += "<h1>"+ "Matches:" +"</h1>";
            txtMatches += "<table border='1'>";
            for(var i = 0; i < info.length; i++){
                txtMatches += "<tr>";
                console.log(info[i]);
                JSON.stringify(info[i], function (key, value) {
                    if (key == "location" || key == "home_team_country" || key == "away_team_country" || key == "goals" || key == "penalties") {
                        matches.push(value);
                        txtMatches += "<td>" +  key + ": " + value + "</td>";
                    } 
                    else {
                      return value;
                    }
                });
                txtMatches += "</tr>";
            }
            txtMatches += "</table>" 

            document.getElementById("allMatches").innerHTML = txtMatches;
        });
    }
    else{
        alert('You already clicked it');
    }  
});
