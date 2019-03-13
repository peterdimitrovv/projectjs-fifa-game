var btnCountriesClicked = false;

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