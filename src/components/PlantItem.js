import CareScale from "./CareScale"
import '../styles/PlanItems.css'

function PlantItem(props){
    const {name,cover,light,water,isSpecialOffer,id} = props
    return (
        <li key={id} className='lmj-plant-item' onClick={(e)=>handleClick(name)}>
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

function handleClick(name){
    alert(`Vous allez acheter ${name}`)
}

export default PlantItem