import { plantList } from "../datas/plantList"
import CareScale from "./CareScale"
import '../styles/ShoppingList.css'

function ShoppingList() {
    return (
        <ul className="lmj-plant-list">
            {plantList.map((plant,index) => (               
                <li key={index} className='lmj-plant-item'>
                    {plant.name} 
                    {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                    <CareScale careType='light' scaleValue={plant.light} />
                    <CareScale careType='water' scaleValue={plant.water} />
                </li>
            ))}
        </ul>
    )
}

export default ShoppingList