function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "navig") {
      x.className += " responsive";
    } else {
      x.className = "navig";
    }
  }

  function myFunction2() {
    var readmore = document.getElementById("readmore");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (readmore.style.display === "none") {
      readmore.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      readmore.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }