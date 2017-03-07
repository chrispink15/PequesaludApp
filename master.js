var addButton = document.getElementById('addBtn');
var articleForm = document.getElementById('artForm');
var span = document.getElementsByClassName("close")[0];
var publishButton = document.getElementById("publicar");
var display = document.getElementById('user_input');
var title = document.getElementById('titulo').value;
var arr = [];

var articles = [
  {
    title: "Dengue en Puerto Rico",
    message: "El Dengue en Puerto Rico cada dia crece mas, aprende como evitar contagearte.",
    articulo: "lasjflkasjd;flajsdfjsad afaskldk sa  fs sdf s afs d s d fs  sa ds sad s fsd  s",
  },
  {
    title: "La UPI hace huelga",
    message: "Los estudiantes de la UPR hacen huelga en el capitolio.",
    articulo: "lasjflkasjd;flajsdfjsad afaskldk sa  fs sdf s afs d s d fs  sa ds sad s fsd  s",
  },
];

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

function showMessage(){
            var title = document.getElementById("titulo").value;
            var article = document.getElementById('informacion').value;
            display_title.innerHTML= title;
            display_article.innerHTML = article;
            articleForm.style.display = "none";
        }
//function
//


function objArticle(i){

    display_title.innerHTML = articles[i].title;
    display_article.innerHTML = articles[i].message;

}

// objArticle(0);
// objArticle(1);
