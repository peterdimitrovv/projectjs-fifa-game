var btnClickedGroups = false;

var Ajax = {

    ajax : null,

    init() {

        if(!this.ajax) { 
            this.ajax = new XMLHttpRequest();   //toi se griji da inicializira ajax propertyto i da go vrushta

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
        //var request = this.init();
        request.open("POST", url);
        request.send(data);
        request.onload = () => {
            callback(JSON.parse(request.responseText));
        };

    }
};

var array = [];

document.getElementById("getGroups").addEventListener("click", function(){
    if(btnClickedGroups=== false){
        btnClickedGroups = true;
        Ajax.get("http://worldcup.sfg.io/teams/group_results", (info) => {
            //console.log(info);
            for(var i = 0; i < info.length; i++){
                console.log(info[i]);
            }
        });
    } 
    else{
        alert('You already clicked it');
    }  
});
