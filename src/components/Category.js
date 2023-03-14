import {plantList} from '../datas/plantList.js'

function ListCategory({category,updateCategory}){
    
    let uniqueCategory = plantList
    .map((item) => item.category)
    .filter((value, index, self) => self.indexOf(value) === index);

    return (        
        <select onChange={(e)=>updateCategory(e.target.value)}>
            <option value='0'>Toutes Catégories</option>
            {uniqueCategory.map((elt) =>
               <option value={elt}>{elt}</option> 
             )
            }
        </select>
    )
}
export default ListCategory