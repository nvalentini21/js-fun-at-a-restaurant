


function takeOrder(orderNumber, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(orderNumber)
  } else {
    return deliveryOrders;
  }
};

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = deliveryOrders.length - 1; i >= 0; i--) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
};

function listItems(deliveries){
  var list = []
  for (var i = 0; i < deliveries.length; i++) {
     list.push(deliveries[i].item)
    }
    return list.join(', ');
  }

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
  }



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};
