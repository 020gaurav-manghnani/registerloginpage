var searchButton = document.getElementById("searchButton")

var url = "https://api.funtranslations.com/translate/pig-latin.json?text="



function getMeaning(outputBar){
    document.getElementById("outputBar").value=""
    console.log(url+outputBar)
    return url+outputBar
}



function search() {
    var searchInput=document.getElementById("textBar").value
    fetch(getMeaning(searchInput))
    .then(response=>response.json())
    .then(result=>{
        var output=document.getElementById("outputBar")
        output.value=result.contents.translated;
        console.log(result)
    })
}

searchButton.addEventListener("click",function(){
    search()
})


