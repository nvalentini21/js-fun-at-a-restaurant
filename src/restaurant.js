// The createRestaurant function with the parameter name is returning an object that contains
//the name: name key value pair, and the menu key, which contains an object. The object in the menus
//key contains the keys breakfast, lunch, and dinner, all containing empty arrays.
function createRestaurant(name){
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
};
// note to self: trying using if statements to put the arguement
// into the right array.

//The addMenuItem has the parameters type and food and does the following: if
//if the foodType (accessed via dot notation because the information is contained in an object and as a
//key value pair in the corresponding array) is equal to the string breakfast, AND the breakfast array
//does not already include that foodType, then the foodType (passed in as an argument) should be added to the
//breakfast array (which again is the value to the key breakfast, for the object menus, within the object
//for create restaurant.) If teh foodType is not equal to the string "breakfast,: then the next set of
//conditionals will check to see if it is equal to the string "lunch" or "dinner" and add the foodType
//to either the lunch or dinner array if those arrays do not already contain the foodType.
//
 function addMenuItem(type, foodType){
   if (foodType.type === "breakfast" && !type.menus.breakfast.includes(foodType)) {
     type.menus.breakfast.push(foodType);
   } else if (foodType.type === "lunch" && !type.menus.lunch.includes(foodType)) {
     type.menus.lunch.push(foodType);
   } else if (foodType.type === "dinner" && !type.menus.dinner.includes(foodType)){
     type.menus.dinner.push(foodType);
   }
 };
//The remove item function is delcared with the parameters type, foodType, and foodCategory.
//if the foodCategory is strictly equal to the string breakfast, the breakfast array will be searched
//if the foodType is present in the breakfast array. If it is present, that foodItem is spliced out of the array and
//the interpolated string on line 44 is returned. This process is repeated for the lunch and dinner arrays.
//If the foodType does not match any of the foodTypes in the breakfast, lunch, or dinner arrays, then it will
//return the string on line 66.

 function removeMenuItem(type, foodType, foodCategory){
   if (foodCategory === "breakfast") {
     for (i = 0; i < type.menus.breakfast.length; i++) {
       if (foodType === type.menus.breakfast[i].name){
         type.menus.breakfast.splice(i, 1)
         return `No one is eating our ${foodType} - it has been removed from the ${foodCategory} menu!`
       }
     }
   }
  if (foodCategory === "lunch") {
     for (i = 0; i < type.menus.lunch.length; i++) {
       if (foodType === type.menus.lunch[i].name){
         type.menus.lunch.splice(i, 1)
         return `No one is eating our ${foodType} - it has been removed from the ${foodCategory} menu!`
       }
     }
 }
 if (foodCategory === "dinner") {
     for (i = 0; i < type.menus.dinner.length; i++) {
       if (foodType === type.menus.dinner[i].name) {
         type.menus.dinner.splice(i, 1)
         return `No one is eating our ${foodType} - it has been removed from the ${foodCategory} menu!`
       }
     }
  }
   return `Sorry, we don't sell ${foodType}, try adding a new recipe!`
 };



// else if (foodCategory === "dinner") {
//     for (i = 0; i < type.menus.dinner.length; i++) {
//       if (foodType === type.menus.dinner[i].name) {
//         type.menus.dinner.splice(i, 1)
//         return `No one is eating our ${foodType} - it has been removed from the ${foodCategory} menu!`
//     }
//   }
// }

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
