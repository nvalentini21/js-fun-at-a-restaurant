
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
 function addMenuItem(type, foodType){
   if (foodType.type === "breakfast" && !type.menus.breakfast.includes(foodType)) {
     type.menus.breakfast.push(foodType);
   } else if (foodType.type === "lunch" && !type.menus.lunch.includes(foodType)) {
     type.menus.lunch.push(foodType);
   } else if (foodType.type === "dinner" && !type.menus.dinner.includes(foodType)){
     type.menus.dinner.push(foodType);
   }
 };

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
