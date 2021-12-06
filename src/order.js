
//The takeOrder function has two parameters, orderNumber and deliveryOrders.
//If the length of the deliveryOrders array (argument deliveryOrders) is less than three,
//then a new order is pushed to the array via the orderNumber parameter. The entire delivery
//order array is then returned.

function takeOrder(orderNumber, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(orderNumber)
  } else {
    return deliveryOrders;
  }
};
// The refundOrder function has two parameters, orderNumber, and deliveryOrders. A for loop
//is used to search through each item of the dliveryOrders array, starting from the end.
//If the orderNumber that is passed in is equal to any value in the array, that value in the array
//wll then be spliced out.
function refundOrder(orderNumber, deliveryOrders) {
  for (var i = deliveryOrders.length - 1; i >= 0; i--) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
};
//
function listItems(deliveries){
  var list = []
  for (var i = 0; i < deliveries.length; i++) {
     list.push(deliveries[i].item)
    }
    return list.join(', ');
};
// The searchOrder function has two parameters, deliverOrders, and name. within the function,
//the variable list is created as an empty array data type. A for loop is established that
//loops through the deliveryOrders array, and pushes the item name from each order object into
//the new list array. Then the list array is searched under the following conditions: If the array
//includes the name passed in as an argument, it will return true. If it does not contain the name
//passed in as an argument, it will return false.
  function searchOrder(deliveryOrders, name){
    var list = []
    for (var i = deliveryOrders.length - 1; i >= 0; i--) {
      list.push(deliveryOrders[i].item)
    }
    if (list.includes(name)) {
      return true
    } else {
      return false
    }
  };



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};
