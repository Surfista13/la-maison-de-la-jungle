import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

//Carescale est un enfant de ShoppingList
function ShoppingList({cart,updateCart,category}) {
    return (
        <div className='lmj-shopping-list'>   
            <ul className="lmj-plant-list">
                {plantList.filter((plant) => category == 0 ? plant : plant.category == category).map((plant) => (
                    <div>
                        <PlantItem key={plant.id} name={plant.name} id={plant.id} light={plant.light} water={plant.water} isSpecialOffer={plant.isSpecialOffer} cover={plant.cover} price={plant.price}/>
                        <button onClick={() => addToCart(cart,updateCart,plant)}>
                            ajout panier
                        </button> 
                    </div> 
                ))}             
            </ul>
        </div>
    )
}

function addToCart(cart,updateCart,plant){
    if(!cart.includes(plant))
    {
    plant.quantity = 1;
    updateCart([...cart,plant])
    }  else{
        cart.find((elt)=>elt === plant).quantity++
        updateCart([...cart])
    }    
    
}


export default ShoppingList