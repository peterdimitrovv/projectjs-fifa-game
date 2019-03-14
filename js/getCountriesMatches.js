var btnCountriesMatchesClicked = false;

var txtCountriesMatches = "";
var countriesMatches = [];
document.getElementById("getCountriesMatches").addEventListener("click", function(){
    if(btnCountriesMatchesClicked === false){
        btnCountriesMatchesClicked = true;
        Ajax.get("http://worldcup.sfg.io/matches/country?fifa_code=ARG", (info) => {
            txtCountriesMatches += "<h1>" + "Countries Matches:" + "</h1>";
            txtCountriesMatches += "<table border='1'>";
            console.log(info);
            for(var i = 0; i < info.length; i++){
                txtCountriesMatches += "<tr>";
                console.log(info[i]);
                JSON.stringify(info[i], function (key, value) {
                    if (key == "location" || key == "home_team_country"|| key == "away_team_country" || key == "description" || key == "temp_celsius" || key == "temp_farenheit" || key == "wind_speed") {
                        countriesMatches.push(key + ": " + value);
                        txtCountriesMatches += "<td>" +  key + ": " + value + "</td>";
                    } 
                    else 
                    {
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