//starting values
const cartList = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];

// ----------- MANDATORY ----------------------
//List all products
function print(product) {
    console.log("------");
    for (key in product) {
      console.log(key.toUpperCase() + ":" + product[key]);
    }
}

console.log("PRODUCTOS DE LA CESTA :")
for (product of cartList) {
  print(product);
}
//Remove the item with the id 54657

//Calculate the total (price*quantity)

//Filter the items premium

// ----------- OPTIONAL ----------------------
//if al poducts are premium show a message

//Show the cart by html basic list

//Apply 5% discount if the total is more than 100€