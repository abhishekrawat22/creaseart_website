//Funtionality to show slide while cliking on indicators.
let contentPanel = function(evt, contentId) {
    
    let i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    
    for (i = 0; i < tabcontent.length; i++) {
        
      tabcontent[i].style.display = "none";
  
    }

    tablinks = document.getElementsByClassName("tablinks");
  
    for (i = 0; i < tablinks.length; i++) {
  
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(contentId).style.display = "flex";
  
    evt.currentTarget.className += " active";
  
}

//Funtionality to slide show automatically.
let slideIndex = 0;

let showSlides = function() {
    let i;
    let tabcontent = document.getElementsByClassName("tab-content");
    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > tabcontent.length) {slideIndex = 1}    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tabcontent[slideIndex-1].style.display = "flex";  
    tablinks[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

showSlides();


// Read more/less funtionality.
let showTextOne = function() {
    let dotsOne = document.getElementById("dots1");
    let moreTextOne = document.getElementById("more1");
    let btnTextOne = document.getElementById("myBtn1");

    if (dotsOne.style.display === "none") {
        dotsOne.style.display = "inline";
        btnTextOne.innerHTML = "Read more"; 
        moreTextOne.style.display = "none";
    } else {
        dotsOne.style.display = "none";
        btnTextOne.innerHTML = "Read less"; 
        moreTextOne.style.display = "inline";
    }
}

let showTextTwo = function() {    
    let dotsTwo = document.getElementById("dots2");
    let moreTextTwo = document.getElementById("more2");
    let btnTextTwo = document.getElementById("myBtn2");

    if (dotsTwo.style.display === "none") {
        dotsTwo.style.display = "inline";
        btnTextTwo.innerHTML = "Read more"; 
        moreTextTwo.style.display = "none";
    } else {
        dotsTwo.style.display = "none";
        btnTextTwo.innerHTML = "Read less"; 
        moreTextTwo.style.display = "inline";
    }
}

let showTextThree = function() {
    let dotsThree = document.getElementById("dots3");
    let moreTextThree = document.getElementById("more3");
    let btnTextThree = document.getElementById("myBtn3");

    if (dotsThree.style.display === "none") {
        dotsThree.style.display = "inline";
        btnTextThree.innerHTML = "Read more"; 
        moreTextThree.style.display = "none";
    } else {
        dotsThree.style.display = "none";
        btnTextThree.innerHTML = "Read less"; 
        moreTextThree.style.display = "inline";
    }
}