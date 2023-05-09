console.log("Hello World");


function scroll(){
    var x = document.getElementById("myTopnav");
         if (x.className === "topnav") {
            x.className += " responsiveNav";
        } else {
            x.className = "topnav";
        }
}

scroll;