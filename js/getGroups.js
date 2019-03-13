var btnClickedGroups = false;

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

var txtGroups = "";
var groups = [];
document.getElementById("getGroups").addEventListener("click", function(){
    if(btnClickedGroups === false){
        btnClickedGroups = true;
        Ajax.get("http://worldcup.sfg.io/teams/group_results", (info) => {
            txtGroups += "<h1>" + "Groups:" + "</h1>"
            txtGroups += "<table border='1'>";
            //console.log(info);
            for(var i = 0; i < info.length; i++){
                txtGroups += "<tr>";
                console.log(info[i]);
                JSON.stringify(info[i], function (key, value) {
                    if (key == "letter" || key == "country") {
                        groups.push(value);
                        txtGroups += "<td>" +  key + ": " + value + "</td>";
                    } 
                    else {
                      return value;
                    }
                });
                txtGroups += "</tr>";
            }
            txtGroups += "</table>";

            document.getElementById("allGroups").innerHTML = txtGroups;
        });
    } 
    else{
        alert('You already clicked it');
    }  
});
