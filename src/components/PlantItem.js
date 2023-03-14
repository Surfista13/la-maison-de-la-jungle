import {CareScale} from "./CareScale"
import '../styles/PlanItems.css'

function PlantItem(props){
    const {name,cover,light,water,isSpecialOffer,id,price} = props
    
    return (
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt='imagehh'/>
            {name} {price} €
            {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            <div>
                <CareScale careType='light' scaleValue={light} /> 
                <CareScale careType='water' scaleValue={water} />   
            </div>     
        </li>
    )
}

export default PlantItem