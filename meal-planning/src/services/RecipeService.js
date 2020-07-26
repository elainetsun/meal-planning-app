const baseUrl = 'http://localhost:3001';

let recipes = [
  {
    id: 1,
    name: 'Curry',
    description: 'spicy coconut curry',
    ingredients: [
      { id: 1, name: 'potato', quantity: 3 },
      { id: 2, name: 'carrot', quantity: 1 },
      { id: 3, name: 'spice', quantity: 1 }
    ],
    favorite: false
  },
  {
    id: 2,
    name: 'Pasta',
    description: 'penne, meatballs, and tomato sauce',
    ingredients: [
      { id: 4, name: 'penne', quantity: 1 },
      { id: 5, name: 'ground beef', quantity: 1 },
      { id: 6, name: 'tomato sauce', quantity: 1 }
    ],
    favorite: true
  },
  {
    id: 3,
    name: 'Cookies',
    description: 'chocolate chip',
    ingredients: [
      { id: 7, name: 'flour', quantity: 1 },
      { id: 8, name: 'chocolate chips', quantity: 1 },
      { id: 9, name: 'butter', quantity: 1 }
    ],
    favorite: false
  }
];

const getRecipes = async () => {
  const response = await fetch(`${baseUrl}/api/recipes`);
  return response.json();
};

const saveRecipes = newRecipes => {
  recipes = newRecipes;
};

const getIngredients = () => {
  let ingredients = [];

  recipes.forEach(r => {
    r.ingredients.forEach(i => {
      ingredients.push(i);
    });
  });
  return ingredients;
};

export default { getRecipes, saveRecipes, getIngredients };
