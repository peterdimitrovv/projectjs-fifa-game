var btnCountriesClicked = false;

var txtCountries = "";
var countries = [];
document.getElementById("getCountries").addEventListener("click", function(){
    if(btnCountriesClicked === false){
        btnCountriesClicked = true;
        Ajax.get("http://worldcup.sfg.io/teams", (info) => {
            txtCountries += "<h1>" + "Countries:" + "</h1>";
            txtCountries += "<table border='1'>";
            //console.log(info);
            for(var i = 0; i < info.length; i++){
                txtCountries += "<tr>";
                console.log(info[i]);
                JSON.stringify(info[i], function (key, value) {
                    if (key == "country" || key == "fifa_code" || key == "group_letter") {
                        countries.push(value);
                        txtCountries += "<td>" +  key + ": " + value + "</td>";
                    }
                    else {
                        return value;
                    }
                });
                txtCountries += "</tr>";
            }
            txtCountries += "</table>" 

            document.getElementById("allCountries").innerHTML = txtCountries;
        });
    }
    else{
        alert('You already clicked it');
    }
});