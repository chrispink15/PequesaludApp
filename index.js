var shareButton = document.querySelector(".shareBtn");
var shareForm = document.getElementById('shareForm');
var span = document.getElementsByClassName("close")[0];
var favButton = document.getElementsByClassName('fa.fa-star');

shareForm.style.display = "none";

// function share() {
//   shareForm.style.display = "block";
// }

shareButton.addEventListener("click", share);
function share() {
  var shareButton = document.querySelector(".shareBtn");
  shareForm.style.display = "block";
  // shareForm.style.display = "none";
}
// shareButton.onclick = share() {
//   // for(var i = 0; )
//     shareForm.style.display = "block";
//     console.log("a");
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    shareForm.style.display = "none";
}

// span.addEventListener("click", function(){
//   shareForm.style.display = "none";
// });

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == shareForm) {
        shareForm.style.display = "none";
    }
}

favButton.addEventListener("hover", function(){
  favButton.classList.add(".fa.fa-star::after"); 
  favButton.style.color = "#E91E63";
});
