//Find the product name & price with women or men category
const users = [
    {
      name: "Jason",
      type: "member",
      price: 39,
      priceType: "monthly",
      category: ["clothing", "food", "medicine"],
      brand: "aroma",
      status: "published",
      color: [["red", "green", "blue"]],
      products: [
        {name: "product one", type: "clothing", price: 19, category: "men" },
        {name: "product two", type: "clothing", price: 29, category: "women" },
        {name: "product three", type: "food", price: 9, category: "liquid" },
        {name: "product four", type: "medicine", price: 3.5, category: "heart" },
      ]
    },
    {
      name: "John Doe",
      type: "customer",
      price: 0,
      priceType: "",
      category: ["food", "medicine"],
      brand: "typhon",
      status: "new",
      color: ["yellow", "black", "orange", "green"],
      products: [
        {name: "product one", type: "clothing", price: 19, category: "men" },
        {name: "product two", type: "clothing", price: 29, category: "women" },
        {name: "product three", type: "food", price: 9, category: "liquid" },
      ]
    }
  ];


 

const productsWithWomenOrMenCategory = [];

users.forEach((user) => {
  user.products.forEach((product) => {
    if (product.category === "women" || product.category === "men") {
      productsWithWomenOrMenCategory.push({
        name: product.name,
        price: product.price,
      });
    }
  });
});

console.log(productsWithWomenOrMenCategory);


