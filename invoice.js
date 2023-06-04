const {priceAfterDiscount} = require("./discount");
const {supermarket} = require("./supermarket");

function processInvoice(products, quantities) {
 
  const cart = products.map((product, index) => {
    const [item, quantity] = [product, quantities[index]];
    return { item, quantity };
  });

 const  invoice=cart.map((product)=>priceAfterDiscount(product));
 return invoice;

}

module.exports = {
  processInvoice,
};
