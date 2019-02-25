
// Fonctionnalité 1  =>

let footer = document.querySelector('footer');
footer.addEventListener("click", OnFooterClick);
function OnFooterClick(){
  console.log("clique")
}


// Fonctionnalité 1-bis : =>

let i = 1
footer.addEventListener("click", function(){
  console.log(`clic numéro ${i}`);
  i ++;
});



// Fonctionnalité 2 =>



let navbarHeader = document.getElementsByClassName('navbar-toggler')[0];
let menu = document.getElementById('navbarHeader');

navbarHeader.addEventListener('click', function(){
  menu.classList.toggle("collapse");
});



// Fonctionnalité 3 => un style ="color: red" au texte de la card !


let card1 = document.getElementsByClassName('card-text')[0];
console.log(card1);
let Edit1 = document.querySelectorAll('.btn-outline-secondary')[0];
console.log(Edit1)
Edit1.addEventListener("click", function(){
  card1.style.color = "red";
});



// Fonctionnalité 4 => un style ="color: green" au texte de la card + un retour à la normale


let card2 = document.getElementsByClassName('card-text')[1];
console.log(card2);
let Edit2 = document.querySelectorAll('.btn-outline-secondary')[1];
console.log(Edit2)
let colorText = 'blank';

Edit2.addEventListener("click", function(){
  if (colorText === 'blank') {
    card2.style.color = 'green';
    colorText = 'green'
  } else if (colorText === 'green') {
    card2.style.color = '';
    colorText = 'blank'
  }
});


// Fonctionnalité 5 : =>  fonctionnalité à la sauce ☢


let navbar = document.getElementsByTagName('header')[0];
let CDN = document.getElementsByTagName('link')[0];
let styleSheet = 'bootstrap';
navbar.addEventListener('dblclick', function() {
  if (styleSheet == 'bootstrap'){
    CDN.href = '';
    styleSheet = 'none';
  } else if (styleSheet == 'none'){
    CDN.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    styleSheet = 'bootstrap';
  }
});


// Fonctionnalité 6 : =>


let cards = document.getElementsByClassName('col-md-4');
let viewButtons = document.getElementsByClassName('btn-group');

for (let i = 0; i < cards.length; i++) {
  viewButtons[i].firstElementChild.addEventListener('mouseover', function() {
    if (cards[i].getElementsByClassName('card-img-top')[0].style.width === "20%") {
      cards[i].getElementsByClassName('card-img-top')[0].style.width = "100%";
      cards[i].getElementsByClassName('card-text')[0].style.display = "block";
    } else {
      cards[i].getElementsByClassName('card-img-top')[0].style.width = "20%";
      cards[i].getElementsByClassName('card-text')[0].style.display = "none";
    }
  });
}


//  Fonctionnalité 7 =>

let cardToMove = document.getElementsByClassName('col-md-4');
let row = document.getElementsByClassName('row')[1];
let greyArrow = document.getElementsByClassName('btn-secondary')[0];

greyArrow.addEventListener('click', function() {
  row.insertBefore(cardToMove[cardToMove.length-1], cardToMove[0]);
});


//  Fonctionnalité 8 =>


let blueArrow = document.getElementsByClassName('btn-primary')[0];

blueArrow.addEventListener('click', function(e) {
  e.preventDefault();
  row.insertBefore(cardToMove[cardToMove.length-1], cardToMove[0].nextSibling);
});

// Fonctionnalité 9

