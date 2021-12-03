function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
};

function createMenuItem(name, price, type){
  var foodItem = {
    name: name,
    price: price,
    type: type
  }
  return foodItem;
  }

  function addIngredients(item, ingredients){
    if (!ingredients.includes(item)){
      ingredients.push(item);
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
};

function decreasePrice(){
  return .90*(initialPrice);
}

function createRecipe(title, ingredients, menuItemType){
  return recipe = {
    title:title,
    ingredients:ingredients,
    type:menuItemType
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
}
