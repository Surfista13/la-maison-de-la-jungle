import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

//Carescale est un enfant de ShoppingList
function ShoppingList() {
    return (
        <ul className="lmj-plant-list">
            {plantList.map((plant) => (
                <PlantItem key={plant.id} name={plant.name} id={plant.id} light={plant.light} water={plant.water} isSpecialOffer={plant.isSpecialOffer} cover={plant.cover}/>               
            ))}
        </ul>
    )
}

export default ShoppingList