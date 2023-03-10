import {CareScale,AlerteScale} from "./CareScale"
import '../styles/PlanItems.css'
import { getAllByPlaceholderText } from "@testing-library/react"

function PlantItem(props){
    const {name,cover,light,water,isSpecialOffer,id} = props
    return (
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover}/>
            {name} 
            {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            <div>
                <CareScale careType='light' scaleValue={light} /> 
                <CareScale careType='water' scaleValue={water} />   
            </div>        
        </li>
    )
}

export default PlantItem