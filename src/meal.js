function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
};
//The createMenuItem function is taking in three parameters, name, price, and type,
//and declaring a variable foodItem, as an object with the dynamic key value pairs
//name, price, and type. The function returns the Object foodItem.
function createMenuItem(name, price, type){
  var foodItem = {
    name: name,
    price: price,
    type: type
  }
  return foodItem;
};
// The addIngredients function is taking in two parameters, item and ingredients.
//If the incredients array (declared in the test file) does not include the item (passed
//in as an argument via the item parameter, then the item will be pushed into the ingredients array.)
  function addIngredients(item, ingredients){
    if (!ingredients.includes(item)){
      ingredients.push(item);
  }
};
//The formatPrice function is taking in the parameter Initial Price, and returing the interpolate string
//that adds a dollar sign infront of the argument that will be passed into the initialPrice parameter.
function formatPrice(initialPrice) {
  return `$${initialPrice}`
};
//The decreasePRice function with the parameter initialPrice, is multiplying the argument
//passed into initial price by .90, therefore returning the argument reduced by 10%.
function decreasePrice(initialPrice){
  return .90*(initialPrice);
};
//The createRecipe function with the parameters title, ingredients, and menuItemType is
//returing the object recipe, which contains the dynamic key value pairs title:title, ingredients:ingredients
//and type:menuItemtype. The keys will take the arguments that are passed into the parameters.
function createRecipe(title, ingredients, menuItemType){
  return recipe = {
    title:title,
    ingredients:ingredients,
    type:menuItemType
  }
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
}
