// Créer un objet "auto" avec la marque, le modèle et l'année
// Faire le destructuration de cet objet
// Afficher sur la console

const auto = {
  make: "BMW",
  model: "X5",
  year: 2023,
};

const { model: modele, make: marque, year: date } = auto;

console.log(`La voiture ${marque} ${modele} a été produite en ${date} `);
