console.log("Hello World");

scroll();

function scroll(){
    var x = document.getElementById("myTopnav");
         if (x.className === "topnav") {
            x.className += " responsiveNav";
        } else {
            x.className = "topnav";
        }
}