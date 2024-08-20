const iceCream = [
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Chocolate', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Rocky Road', price: 1.50, quantity: 0, type: 'scoop' },
  { name: 'Rainbow Sherbet', price: 1.50, quantity: 0, type: 'scoop' },
  { name: 'Mint Chocolate Chip', price: 1.50, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Syrup', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Oreo', price: 0.50, quantity: 0, type: 'topping' },
  { name: "Reese's Peanut Butter Cups", price: 0.50, quantity: 0, type: 'topping' },
  { name: "M&M's", price: 0.50, quantity: 0, type: 'topping' },
  { name: "Sugar Cone", price: 0.75, quantity: 0, type: 'container' },
  { name: "Waffle Cone", price: 1, quantity: 0, type: 'container' },
  { name: "Dipped Cone", price: 1, quantity: 0, type: 'container' },
  { name: "Waffle Bowl", price: 1.25, quantity: 0, type: 'container' },
  { name: "Dipped Waffle Bowl", price: 1.50, quantity: 0, type: 'container' },
  { name: "Cup", price: 0.50, quantity: 0, type: 'container' }
]

function addItem(selectedItem, selectedType) {
  for (let i = 0; i < iceCream.length; i++) {
    let itemAdded = iceCream[i];
    if (itemAdded.name == selectedItem) {
      itemAdded.quantity++;
      break;
    }
  }


  drawOrder()
}

function calcTotal() {
  let total = 0;
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i];
    if (item.quantity > 0) {
      total += (item.quantity * item.price);
    }
  }
  return total;
}

function drawOrder() {
  let orderElem = document.getElementById("orderItems");
  let totalElem = document.getElementById("total")
  let orderCont = "";
  let scoopCont = grabScoops();
  let toppingCont = grabToppings();
  let containerCont = grabContainers();
  orderCont = scoopCont + toppingCont + containerCont;
  orderElem.innerHTML = orderCont;
  totalElem.innerText = (calcTotal()).toFixed(2);
}

function grabScoops() {
  let orderCont = "";
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    if (item.type == "scoop" & item.quantity > 0) {
      orderCont += `<p>${item.quantity}x ${item.name} Scoop $${(item.price * item.quantity).toFixed(2)}</p>`
    }
  }
  return orderCont;
}

function grabToppings() {
  let orderCont = "";
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    if (item.type == "topping" & item.quantity > 0) {
      orderCont += `<p>${item.quantity}x ${item.name} Topping $${(item.price * item.quantity).toFixed(2)}</p>`
    }
  }
  return orderCont;
}

function grabContainers() {
  let orderCont = "";
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    if (item.type == "container" & item.quantity > 0) {
      orderCont += `<p>${item.quantity}x ${item.name} $${(item.price * item.quantity).toFixed(2)}</p>`
    }
  }
  return orderCont;
}