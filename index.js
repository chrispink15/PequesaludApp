var shareButton = document.querySelector('.shareBtn');
var shareForm = document.getElementById('shareForm');
var span = document.getElementsByClassName("close")[0];

shareForm.style.display = "none";

// shareButton.addEventListener("click", function(){
//   shareForm.style.display = "block";
// });
shareButton.onclick = function() {
    shareForm.style.display = "block";
}

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
