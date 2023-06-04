const {supermarket,cat_disc,subcat_disc} = require("./supermarket");

function priceAfterDiscount({item,quantity}){
    quantity=parseInt(quantity);
    const it = supermarket.find((product)=>product.name===item);
    console.log(it);
    const price_cat_disc = quantity * cat_disc[it.category] * it.price;
    const price_subcat_disc = quantity * subcat_disc[it.subcategory] * it.price;
    let price_item_disc = 0;
    if(it.discountType=="quantity"){
      if(quantity>it.discount.quantity){
        
        let units=Math.floor(quantity/(it.discount.quantity+it.discount.free)) 
        
        price_item_disc= ((units * it.discount.quantity) + (quantity-(units*it.discount.quantity)-(units*it.discount.free)))*it.price;
      }else{
        
        price_item_disc=quantity*it.price;
      }
    }else{
      price_item_disc=quantity*it.price*it.discount.discount;
    }

    const final_price=Math.min(price_cat_disc,price_subcat_disc,price_item_disc);
    const savings= quantity*it.price - final_price;

    return {item,quantity,final_price,savings};
  }

  module.exports ={
    priceAfterDiscount
  }