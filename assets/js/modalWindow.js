/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Get the modal
var cuisine_classic = document.getElementById("cuisineClassic");

// Get the button that opens the modal
var btn1 = document.getElementById("classic-menu");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-window")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  cuisine_classic.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  cuisine_classic.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === cuisine_classic) {
    cuisine_classic.style.display = "none";
  }
}
