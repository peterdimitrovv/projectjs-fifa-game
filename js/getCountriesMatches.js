var btnCountriesMatchesClicked = false;

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

var txtCountriesMatches = "";
var countriesMatches = [];
document.getElementById("getCountriesMatches").addEventListener("click", function(){
    if(btnCountriesMatchesClicked === false){
        btnCountriesMatchesClicked = true;
        Ajax.get("http://worldcup.sfg.io/matches/country?fifa_code=ARG", (info) => {
            txtCountriesMatches += "<h1>" + "Countries Matches:" + "</h1>";
            txtCountriesMatches += "<table border='1'>";
            //console.log(info);
            for(var i = 0; i < info.length; i++){
                txtCountriesMatches += "<tr>";
                console.log(info[i]);
                JSON.stringify(info[i], function (key, value) {
                    if (key == "location" || key == "away_team_country" || key == "home_team_country" || key == "description" || key == "temp_celsius" || key == "temp_farenheit" || key == "wind_speed") {
                        countriesMatches.push(value);
                        txtCountriesMatches += "<td>" +  key + ": " + value + "</td>";
                    } 
                    else {
                      return value;
                    }
                });
                txtCountriesMatches += "</tr>";
            }
            txtCountriesMatches += "</table>" 

            document.getElementById("allCountriesMatches").innerHTML = txtCountriesMatches;
        });
    }
    else{
        alert('You already clicked it');
    }
});
