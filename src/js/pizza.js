"use strict";

/*Min pizzabot*/

// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Välkommen till min JavaScript pizzeria. Är du redo att börja? Tryck OK.`
)

let namn = prompt("Vad heter du?");
alert("Hej " + namn + "! Välkommen");

// Step 2 - Food choice
// Your code goes here
let choice = prompt("Vad vill du beställa? Välj ett nummer:\n1. Pizza \n2. Pasta\n3. Sallad");
if (choice === "1") {
  alert("Du har valt Pizza");
  let pizzaChoice = prompt("Vilken Pizza vill du ha? Välj ett nummer:\n1. Margherita\n2. Vesuvio\n3. Quattro Stagioni");
  if (pizzaChoice === "1") {
    alert("Du har valt Margherita 🍕");
  } else if (pizzaChoice === "2") {
    alert("Du har valt Vesuvio 🍕");
  } else if (pizzaChoice === "3") {
    alert("Du har valt Quattro Stagioni 🍕");
  } else {
    alert("Ogiltigt pizzaval.");

  }

} else if (choice === "2") {
  alert("Du har valt Pasta");
  let pastaChoice = prompt("Vilken pasta vill du beställa? Välj ett nummer:\n1. Carbonara \n2. Alfonso \n3. Bolognese");
  if (pastaChoice === "1") {
    alert("Du har valt Carbonara");
  } else if (pastaChoice === "2") {
    alert("Du har valt Alfonso");
  } else if (pastaChoice === "3") {
    alert("Du har valt Bolognese");
  } else {
    alert("Ogiltigt pastaval.");
  }
} else if (choice === "3") {
  alert("Du har valt Sallad");
  let salladChoice = prompt("Vilken sallad vill du beställa? Välj ett nummer.:\n1. Skinka\n2. Vegetarisk \n3. Kyckling");
  if (salladChoice === "1") {
    alert("Du har valt skinka");
  } else if (salladChoice === "2") {
    alert("Du har valt Vegetarisk");
  } else if (salladChoice === "3") {
    alert("Du har valt kyckling");
  }
} else {
  alert("Ogiltigt val. Var god välj 1, 2 eller 3.");
}

// Step 4 - Age
// Your code goes here
let age = prompt("Hur gammal är du? Skriv din ålder");
age = Number(age);
if (age <= 18) {
  alert("En barnportion kommer förberedas åt dig. Det blir 100 kr.")
} else {
  alert("En vuxenportion kommer förberedas åt dig. Det blir 150 kr.");
}

// Step 5 - Order confirmation
// Your code goes here
let confirmation = prompt("Vill du bekräfta din beställning? Skriv Ja eller Nej");
if (confirmation.toLowerCase() === "ja") {
  alert("Tack din order kommer förberedas");
} else if (confirmation.toLowerCase === "nej") {
  alert("Okej, beställningen avbryts. Vi hoppas att vi ses snart igen!");
} else {
  alert("Ogiltigt svar");
}

