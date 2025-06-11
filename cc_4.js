
const products = [
  { name: "Laptop", category: "electronics", price: 1000, inventory: 10 },
  { name: "T-Shirt", category: "apparel", price: 30, inventory: 20 },
  { name: "Milk", category: "groceries", price: 5, inventory: 50 },
  { name: "Dish Soap", category: "household", price: 3, inventory: 40 },
  { name: "Book", category: "education", price: 20, inventory: 15 }
];


for (const product of products) {
  switch (product.category) {
    case "electronics":
      product.price *= 0.8;
      break;
    case "apparel":
      product.price *= 0.85;
      break;
    case "groceries":
    case "household":
      product.price *= 0.9;
      break;
    default:
      break;
  }
}


const customerType = "student"; 
let extraDiscount = 0;
if (customerType === "student") {
  extraDiscount = 0.05;
} else if (customerType === "senior") {
  extraDiscount = 0.07;
}


for (let i = 1; i <= 3; i++) {
  let total = 0;
  for (const product of products) {
    total += product.price;
    product.inventory--;
  }
  total -= total * extraDiscount;
  console.log(`Customer ${i} Total: $${total.toFixed(2)}`);
}


console.log("Details of first product:");
const sampleProduct = products[0];
for (const key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}


console.log("Updated product list:");
for (const [index, product] of products.entries()) {
  const { name, category, price, inventory } = product;
  console.log(`Product ${index + 1}: ${name} | ${category} | $${price.toFixed(2)} | Inventory: ${inventory}`);
}
