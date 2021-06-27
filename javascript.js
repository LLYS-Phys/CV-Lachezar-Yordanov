function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "navig") {
      x.className += " responsive";
    } else {
      x.className = "navig";
    }
  }