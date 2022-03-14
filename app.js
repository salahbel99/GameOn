// Nav responsive
function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
}

// Methode de selecteur de requête 
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal_btn");
const formData = document.querySelectorAll(".formData");
const thankBtn = document.querySelectorAll(".thank_btn");
const thankBg = document.querySelector(".bground_thank");


// Clic "je m'inscris"
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Lancement du formulaire (changement du display en block)
function launchModal() {
  modalBg.style.display = "block";
}

// fermer du formulaire via la croix
document.getElementById("closeform").addEventListener("click", function(closeModal) {
	modalBg.style.display = "none";
});

// fermer thanks via "fermer"
document.querySelector(".button_thank").addEventListener("click", function(closeThank) {
	thankBg.style.display = "none";
	modalBg.style.display = "none";
});

// fermer thanks via croix
document.getElementById("closethanks").addEventListener("click", function(closeThank) {
	thankBg.style.display = "none";
	modalBg.style.display = "none";
});


// Function Message erreur
function showErrorMessage(champForm, formRempli, message) {
	champForm.target.setCustomValidity("");
	if (!champForm.target.validity.valid && champForm.target.value.length == 0) {
			champForm.target.setCustomValidity(message);
	}
};

// Messages d'erreurs par champs pour le formulaire
document.getElementById("inscription").addEventListener("click", function(formRempli) {

	let firstName = document.getElementById("first");
	let lastName = document.getElementById("last");
	let emailValid = document.getElementById("email");
	let birthValid = document.getElementById("birthdate");
	let quantityCity = document.getElementById("quantity");
	let checkBox = document.getElementById("checkbox1");
	
	if (!firstName.value) {
		firstName.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
		};	
		return false;	
	}
	if (!lastName.value) {
		lastName.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
		};
		return false;	
	} 
	if (!emailValid.value) {
		emailValid.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Entrez une adresse valide. Exemple : contact@nom.com")
		};
		return false;	
	}
	if (!birthValid.value) {
		birthValid.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Vous devez entrer votre date de naissance.")
		};
		return false;	
	}
	if (!quantityCity.value) {
		quantityCity.oninvalid = function(champForm) {
			showErrorMessage(champForm, formRempli, "Vous devez renseigner ce champ.")
		};
	}
	else {
		thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));
		function launchThank() {
			thankBg.style.display = "block";
			
		  }
		  formRempli.preventDefault();
		}
});
