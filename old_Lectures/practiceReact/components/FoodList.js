import { apiData } from "../public/food-products";
import { useState } from "react"
import "../utils/foodList.css"


const FoodCard = ({food}) =>{

    const {id, name, image, category, price} = food

    return(
        <div className="food-card" key={id}>
            <img src={image} alt={name} className="food-image" />
            <div className="food-info">
              <h2 className="food-name">{name}</h2>
              <p className="food-category">{category}</p>
              <p className="food-price">₹{price * 100}</p>
              <button className="order-button">Order Now</button>
            </div>
          </div>
    )
}


const FoodList = () =>{
    const [foods, setFoods] = useState([]);

  /* useEffect(() => {
    fetch("/food-products.json")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error("Failed to fetch food data", err));
  }, []); */

  const PromotedFoodCard = withPromotedLabel(FoodCard)


  return (
    <div className="food-container">
      <h1 className="food-title">🍽️ Food Menu</h1>
      <div className="food-grid">
        {apiData.map((food) => 

            food.is_promoted ? (
                <PromotedFoodCard key={food.id} food={food}/>
            ): (
                
                <FoodCard key={food.id} food={food}/>
            )
            
        )}
      </div>
    </div>
  );
}


const withPromotedLabel = (FoodCard) =>{

    // here you can also write return(props), But I just destructured on the fly..
    return ({food}) =>{
        return (
            <div className="promoted-wrapper">
                {food.is_promoted && <span className="promoted-badge">Promoted</span>}
                <FoodCard food={food}/>
            </div>
        )
    }
}


export default FoodList;
