import {plantList} from '../datas/plantList.js'

function ListCategory(){
    
    let uniqueCategory = plantList
    .map((item) => item.category)
    .filter((value, index, self) => self.indexOf(value) === index);

    return (
        <ul>
            {uniqueCategory.map(x => <li key={x}>{x}</li>)}
        </ul>
    )
}
export default ListCategory