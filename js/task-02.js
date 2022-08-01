const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i]
  const itemEl = document.createElement('li')
  itemEl.textContent = ingredient
  const ingredientsUl = document.querySelector('ul')
  ingredientsUl.appendChild(itemEl)
}





