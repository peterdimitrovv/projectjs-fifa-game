var btnCountriesClicked=false;

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

document.getElementById("getCountries").addEventListener("click", function(){
    if(btnCountriesClicked === false){
        btnCountriesClicked = true;
        Ajax.get("http://worldcup.sfg.io/teams/", (info) => {
            // console.log(info);
            for(var i = 0; i < info.length; i++){
                console.log(info[i]);
            }
        });
    }
    else{
        alert('You already clicked it');
    }
});