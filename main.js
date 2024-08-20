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
  { name: 'Oreos', price: 0.50, quantity: 0, type: 'topping' },
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


  drawOrder(selectedType)
}

function calcTotal() {

}

function drawOrder(selectedType) {
  // for (let i = 0; i < iceCream.length; i++) {
  //   if (selectedType == "scoop") {

  //   } else if (selectedType == "topping") {

  //   } else {

  //   }
  // }
}