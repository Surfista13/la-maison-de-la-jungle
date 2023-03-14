import {plantList} from '../datas/plantList.js'

function ListCategory({category,updateCategory}){
    
    let uniqueCategory = plantList
    .map((item) => item.category)
    .filter((value, index, self) => self.indexOf(value) === index);

    return (        
        <select onChange={(e)=>updateCategory(e.target.value)}>
            <option  value='vide'>Toutes Catégories</option>
            {uniqueCategory.map((elt) =>
               <option key={elt} value={elt}>{elt}</option> 
             )
            }
        </select>
    )
}
export default ListCategory