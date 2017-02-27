var addButton = document.getElementById('addBtn');
var articleForm = document.getElementById('artForm');
var span = document.getElementsByClassName("close")[0];
var publishButton = document.getElementById("publicar");
var display = document.getElementById('user_input');
var title = document.getElementById('titulo');

articleForm.style.display = "none";

addButton.onclick = function() {
    articleForm.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    articleForm.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == articleForm) {
        articleForm.style.display = "none";
    }
}

publishButton.onclick = function(){
  alert(title);
}
