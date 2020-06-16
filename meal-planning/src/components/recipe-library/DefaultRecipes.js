const defaultRecipes = [
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
      { id: 1, name: 'penne', quantity: 1 },
      { id: 2, name: 'ground beef', quantity: 1 },
      { id: 3, name: 'tomato sauce', quantity: 1 }
    ],
    favorite: false
  },
  {
    id: 3,
    name: 'Cookies',
    description: 'chocolate chip',
    ingredients: [
      { id: 1, name: 'flour', quantity: 1 },
      { id: 2, name: 'chocolate chips', quantity: 1 },
      { id: 3, name: 'butter', quantity: 1 }
    ],
    favorite: false
  }
];

export default defaultRecipes;
