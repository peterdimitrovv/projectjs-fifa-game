var countriesSearch = function(){
    var countryInput = document.getElementById("inputForCountries");
    if(countryInput.value === ""){
        alert("Please write something in the search input!!!");
    }
    else {
        if(countries.length === 0){
            alert("Please click on Get Countries button!!")
        }
        else{
            var resultInCountries = countries.filter(country => country.toLowerCase().includes(countryInput.value.toLowerCase()));
            if(resultInCountries.length === 0){
                alert('Nothing Found In Countries! Please try again!!!')
            }
            else{
                document.getElementById("countriesResult").innerHTML += resultInCountries + "; ";
            }
        }
    }
}

document.getElementById("searchInCountries").addEventListener("click", countriesSearch);

var groupsSearch = function(){
    var groupInput = document.getElementById("inputForGroups");
    if(groupInput.value === ""){
        alert("Please write something in the search input!!!");
    }
    else {
        if(groups.length === 0){
            alert("Please click on Get Group button!!")
        }
        else{
            var resultInGroups = groups.filter(group => group.toLowerCase().includes(groupInput.value.toLowerCase()));
            if(resultInGroups.length === 0){
                alert('Nothing Found In Groups! Please try again!!!')
            }
            else{
                document.getElementById("groupsResult").innerHTML += resultInGroups + "; ";
            }
        }
    }
}

document.getElementById("searchInGroups").addEventListener("click", groupsSearch);

var countriesMatchesSearch = function(){
    var countriesMatchesInput = document.getElementById("inputForCountriesMatches");
    if(countriesMatchesInput.value === ""){
        alert("Please write something in the search input!!!");
    }
    else {
        if(countriesMatches.length === 0){
            alert("Please click on Get Countries Matches button!!")
        }
        else{
            var resultInCountriesMatches = countriesMatches.filter(countryMatch => countryMatch.toLowerCase().includes(countriesMatchesInput.value.toLowerCase()));
            if(resultInCountriesMatches.length === 0){
                alert('Nothing Found In Countries Matches! Please try again!!!')
            }
            else{
                document.getElementById("countriesMatchesResult").innerHTML += resultInCountriesMatches + "; ";
            }
        }
    }
}

document.getElementById("searchInCountriesMatches").addEventListener("click", countriesMatchesSearch);

var matchesSearch = function(){
    var matchesInput = document.getElementById("inputForMatches");
    if(matchesInput.value === ""){
        alert("Please write something in the search input!!!");
    }
    else {
        if(matches.length === 0){
            alert("Please click on Get Matches button!!")
        }
        else{
            var resultInMatches = matches.filter(match => match.toLowerCase().includes(matchesInput.value.toLowerCase()));
            if(resultInMatches.length === 0){
                alert('Nothing Found In Matches! Please try again!!!')
            }
            else{
                document.getElementById("matchesResult").innerHTML += resultInMatches + "; ";
            }
        }
    }
}

document.getElementById("searchInMatches").addEventListener("click", matchesSearch);