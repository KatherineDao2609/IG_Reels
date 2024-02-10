
trigger = function () {
  Slider.classList.toggle("content-to-slide")
};

function toggleDarkMode() {
  var contentContainer = document.getElementById("content-container");
  // Toggle dark mode class on the content container
  contentContainer.classList.toggle("dark-mode");




  // ----------------------------------- if darkmode is toggeled, change the icon "Contrast white"

  // Start of code from https://www.shecodes.io/athena/41733-how-to-check-if-a-class-has-been-added-to-an-element-in-javascript
  // Start of code from https://shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener#:~:text=In%20this%20example%2C%20we%20first,jpg%22%20in%20this%20case). 
  if (contentContainer.classList.contains("dark-mode")) {
    document.getElementById("imgContrast").src = 'img/contrast-white.svg';
    console.log("Class active has been added");
    // change the icon White here if the class exists
  } else {
    document.getElementById("imgContrast").src = 'img/contrast.svg';
    console.log("Class active has not been added");
    // change the icon Black here if the class does not exist
  }


  // ----------------------------------- if darkmode is toggeled, change the icon "Size white"
  if (contentContainer.classList.contains("dark-mode")) {
    document.getElementById("imgSize").src = 'img/size-white.svg';
    console.log("Class active has been added");
    // change the icon White here if the class exists
  } else {
    document.getElementById("imgSize").src = 'img/size.svg';
    console.log("Class active has not been added");
    // change the icon Black here if the class does not exist
  }

  // End of code from https://www.shecodes.io/athena/41733-how-to-check-if-a-class-has-been-added-to-an-element-in-javascript
  // End of code from https://shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener#:~:text=In%20this%20example%2C%20we%20first,jpg%22%20in%20this%20case). 

}


var textSizeIndex = 0;
var textSizes = ["13px", "20px", "36px"];

function toggleTextSize() {
  var contentContainer = document.getElementById("content-text");

  // Toggle font size
  textSizeIndex = (textSizeIndex + 1) % textSizes.length;
  contentContainer.style.fontSize = textSizes[textSizeIndex];
}


