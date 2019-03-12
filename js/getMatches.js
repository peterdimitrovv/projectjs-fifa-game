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

document.getElementById("getMatches").addEventListener("click", function(){
    if(btnMatchesClicked === false){
        btnMatchesClicked = true;
        Ajax.get("http://worldcup.sfg.io/matches", (info) => {
            console.log(info);
            for(var i = 0; i < info.length; i++){
                console.log(info[i]);
            }
        });
    }
    else{
        alert('You already clicked it');
    }  
});
