var modal = document.getElementById("mdl");
var tablenum = document.getElementById("tableNum");

function stopDefAction(e) {
    e.preventDefault();
    if (e.target != e.currentTarget) {
        var clicked = e.target.title;
        tablenum.value = clicked;
        modal.style.display = "block";
        console.log('click event triggered at ' + clicked);
    }
}
var map = document.querySelector("map").addEventListener(
    'click', stopDefAction, false
);
var img0 = document.getElementById("rm1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close-window")[0];
span1.onclick = function(){
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
