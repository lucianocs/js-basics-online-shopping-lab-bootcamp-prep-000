var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


/*
2. The `viewCart()` function does not accept any arguments.
It should loop over every item in your cart, printing out the contents as one long,
coherent statement in this format: `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
    + If the cart is empty, the function should instead print out `Your shopping cart is empty.`
    + ***Note***: Pay close attention to the syntax above. The printed statement
    should be a single sentence that begins with `In your cart, you have `,
     terminates in a period, and can assume the following shapes according to how many items the cart contains:
      * 1 item — `In your cart, you have bananas at $17.`
      * 2 items — `In your cart, you have bananas at $17 and pancake batter at $5.`
      * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`

*/

function addToCart(itemName) {

  var itemPrice = Math.floor(Math.random() * (100 - 1) + 1)

  var obj = new Object({ [itemName]: itemPrice })

  cart.push(obj)

  console.log(`${itemName} has been added to your cart.`)

  return cart
}

function viewCart() {
  if (cart.length == 0) {
    return 'Your shopping cart is empty.'
  } 
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
