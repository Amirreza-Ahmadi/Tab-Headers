function opencity(cityName,element,color){
    var i ,tabcontent ,tabbutton;
    tabcontent = document.getElementsByClassName("header");

    for (i = 0 ; i < tabcontent.length ;i++) {
        tabcontent[i].style.display = "none";
    }

    tabbutton = document.getElementsByClassName("bar__item");
    
    console.log(tabbutton)

    for (i = 0 ; i < tabbutton.length ;i++) {
        tabbutton[i].style.backgroundColor = "";
        tabbutton[i].style.color = "#000";
    }

    document.getElementById(cityName).style.display = "block"

    element.style.backgroundColor = color
    element.style.color = "#fff"
}

document.getElementById("defaultActive").click();