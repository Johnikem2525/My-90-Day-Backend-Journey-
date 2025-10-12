const hummus = function (factor) {
const ingredients = function (amount, unit, item,) {
 let ingredientAmount = amount * factor;
 if (ingredientAmount > 1) {
   unit += "s";
 }
 console.log (`${ingredientAmount} ${unit} "of" ${item}`);
}
ingredients(1, "can", "chickpeas");
ingredients(0.25, "cup", "tahini");
ingredients(0.25, "cup", "lemon juice");
ingredients(1, "clove", "garlic");
ingredients(2, "tablespoon", "olive oil");
ingredients(0.5, "teaspoon", "cumin");
ingredients(0.2, "teaspoon", "salt");
ingredients(5, "gram", "dried vegetables");
ingredients(0.1, "cup", "raisin");
}
hummus(5);