import margheritaPizza  from "./images/Margherita_Pizza.jpg"
import veggieBurger from "./images/VeggieBurger.jpg"
import chickenWings from "./images/ChikenWings.jpg"
import paneerTikka from "./images/PaneerTikka.jpg"
import mangoIceCream from "./images/mangoicecream.jpg"


const apiData = [
  {
    "id": 1,
    "name": "Margherita Pizza",
    "price": 7.99,
    "category": "Pizza",
    "image": margheritaPizza,
    "is_promoted": true
  },
  {
    "id": 2,
    "name": "Veggie Burger",
    "price": 5.49,
    "category": "Burger",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 3,
    "name": "Spaghetti Bolognese",
    "price": 9.99,
    "category": "Pasta",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 4,
    "name": "Caesar Salad",
    "price": 6.25,
    "category": "Salad",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 5,
    "name": "Sushi Platter",
    "price": 12.99,
    "category": "Sushi",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 6,
    "name": "Grilled Sandwich",
    "price": 4.99,
    "category": "Snack",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 7,
    "name": "French Fries",
    "price": 2.99,
    "category": "Sides",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 8,
    "name": "Chicken Wings",
    "price": 8.49,
    "category": "Appetizer",
    "image": chickenWings,
    "is_promoted": true
  },
  {
    "id": 9,
    "name": "Paneer Tikka",
    "price": 7.50,
    "category": "Indian",
    "image": paneerTikka,
    "is_promoted": true
  },
  {
    "id": 10,
    "name": "Dosa with Chutney",
    "price": 6.75,
    "category": "South Indian",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 11,
    "name": "Tandoori Chicken",
    "price": 10.25,
    "category": "Indian",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 12,
    "name": "Falafel Wrap",
    "price": 5.95,
    "category": "Middle Eastern",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 13,
    "name": "Chocolate Cake",
    "price": 4.50,
    "category": "Dessert",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 14,
    "name": "Strawberry Milkshake",
    "price": 3.99,
    "category": "Beverage",
    "image": veggieBurger,
    "is_promoted": false
  },
  {
    "id": 15,
    "name": "Mango Ice Cream",
    "price": 2.75,
    "category": "Dessert",
    "image": mangoIceCream,
    "is_promoted": true
  }
]


module.exports = {
    apiData
}