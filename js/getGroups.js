var btnClickedGroups = false;

var txtGroups = "";
var groups = [];
document.getElementById("getGroups").addEventListener("click", function(){
    if(btnClickedGroups === false){
        btnClickedGroups = true;
        Ajax.get("http://worldcup.sfg.io/teams/group_results", (info) => {
            txtGroups += "<h1>" + "Groups:" + "</h1>"
            txtGroups += "<table border='1'>";
            console.log(info);
            for(var i = 0; i < info.length; i++){
                txtGroups += "<tr>";
                console.log(info[i]);
                JSON.stringify(info[i], function (key, value) {
                    if (key == "letter" || key == "country") {
                        groups.push(key + ": " + value);
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