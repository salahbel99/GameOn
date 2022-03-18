// Nav responsive
function editNav() {
	let navbar = document.getElementById("top_nav");
	if (navbar.className === "top_nav") {
	  navbar.className += " responsive";
	} else {
	  navbar.className = "top_nav";
	}
}

// Methode de selecteur de requête 
const modalBg = document.querySelector(".bground"),
modalBtn = document.querySelectorAll(".modal_btn"),
formData = document.querySelectorAll(".formData"),
thankBtn = document.querySelectorAll(".thank_btn"),
thankBg = document.querySelector(".bground_thank");


// Clic "je m'inscris"
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Lancement du formulaire (changement du display en block)
function launchModal() {
  modalBg.style.display = "block";
}

// fermer du formulaire via la croix
document.getElementById("closeform").addEventListener("click", (closeModal) => {
		modalBg.style.display = "none";
	});

// fermer thanks via "fermer"
document.querySelector(".button_thank").addEventListener("click", (closeThank) => {
		thankBg.style.display = "none";
		modalBg.style.display = "none";
	});

// fermer thanks via croix
document.getElementById("close_thanks").addEventListener("click", (closeThank) => {
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
document.getElementById("registration").addEventListener("click", (formRempli) => {

		let firstName = document.getElementById("first");
		let lastName = document.getElementById("last");
		let emailValid = document.getElementById("email");
		let birthValid = document.getElementById("birthdate");
		let quantityCity = document.getElementById("quantity");
		let checkBox = document.getElementById("inscription1");

		if (!firstName.value) {
			firstName.oninvalid = (champForm) => {
				showErrorMessage(champForm, formRempli, "Please enter 2 or more characters for the first name field.");
			};
			return false;
		}
		if (!lastName.value) {
			lastName.oninvalid = (champForm) => {
				showErrorMessage(champForm, formRempli, "Please enter 2 or more characters for the name field.");
			};
			return false;
		}
		if (!emailValid.value) {
			emailValid.oninvalid = (champForm) => {
				showErrorMessage(champForm, formRempli, "Enter a valid address. Example: contact@name.com");
			};
			return false;
		}
		if (!birthValid.value) {
			birthValid.oninvalid = (champForm) => {
				showErrorMessage(champForm, formRempli, "You must enter your date of birth.");
			};
			return false;
		}
		if (!quantityCity.value) {
			quantityCity.oninvalid = (champForm) => {
				showErrorMessage(champForm, formRempli, "You must fill in this field.)");
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
