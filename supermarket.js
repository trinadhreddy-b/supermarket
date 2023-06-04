class Item {
    constructor(
      name,
      price,
      discountType,
      discount,
      category,
      subcategory
    ) {
      this.name = name;
      this.price = price;
      this.discountType = discountType;
      this.discount = discount;
      this.category = category;
      this.subcategory = subcategory;
    }
  }

  const cat_disc = { "produce": 0.9, "dairy": 0.85 };
  const subcat_disc = { "fruits": 0.82, "veg": 0.95, "milk": 0.8, "cheese": 0.8 };

  const supermarket = [];

  supermarket.push(
    new Item(
      "Apple",
      50,
      "quantity",
      { quantity: 3, free: 1 },
      "produce",
      "fruits"
    )
  );
  supermarket.push(
    new Item("Orange", 80, "percentage", { discount: 0.8 }, "produce", "fruits")
  );

  supermarket.push(
    new Item(
      "Potato",
      30,
      "quantity",
      { quantity: 5, free: 2 },
      "produce",
      "veg"
    )
  );
  supermarket.push(
    new Item("Tomato", 70, "percentage", { discount: 0.9 }, "produce", "veg")
  );

  supermarket.push(
    new Item(
      "Cow Milk",
      50,
      "quantity",
      { quantity: 3, free: 1 },
      "dairy",
      "milk"
    )
  );
  supermarket.push(
    new Item("Soy Milk", 40, "percentage", { discount: 0.9 }, "dairy", "milk")
  );

  supermarket.push(
    new Item(
      "Cheddar",
      50,
      "quantity",
      { quantity: 2, free: 1 },
      "dairy",
      "cheese"
    )
  );
  supermarket.push(
    new Item("Gouda", 80, "percentage", { discount: 0.9 }, "dairy", "cheese")
  );

  module.exports={
    supermarket,cat_disc,subcat_disc
  }