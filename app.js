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
function printProduct(product) {
  console.log("------");
  for (key in product) {
    console.log(key.toUpperCase() + ":" + product[key]);
  }
}

const printCart = (cartList) => {
  console.log("PRODUCTOS DE LA CESTA :");
  for (product of cartList) {
    printProduct(product);
  }
};

printCart(cartList);

//Remove the item with the id 54657
const findById = (id) => {
  for (product of cartList) {
    if (product.id === id) {
      return product;
    }
  }
};

const removeById = (cartList, id) => {
  const indexOfproductToRemove = cartList.indexOf(findById(id));
  const productRemoved = cartList.splice(indexOfproductToRemove, 1);
  console.log(`El producto con id ${productRemoved[0].id} ha sido eliminado.`);
};

console.log("******************************************");
console.log("Eliminar producto con id 54657:");
removeById(cartList, 54657);
console.log("La cesta se ha actualizado:");
printCart(cartList);

//Calculate the total (price*quantity)
const calculateTotal = (cartList) => {
  let total = 0;
  for (product of cartList) {
    total += product.price * product.count;
  }
  return total;
};

console.log("****************");
console.log("Total:" + calculateTotal(cartList) + "€");

//Filter the items premium
const findPremiumProducts = (cartList) => {
  let premiumProducts = [];
  for (product of cartList) {
    if (product.premium === true) {
      premiumProducts.push(product);
    }
  }
  return premiumProducts;
};

console.log("****************");
console.log("Estos son los productos Premium de tu cesta:");
printCart(findPremiumProducts(cartList));

// ----------- OPTIONAL ----------------------
//if al poducts are premium show a message

//Show the cart by html basic list

//Apply 5% discount if the total is more than 100€
