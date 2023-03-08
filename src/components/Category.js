import '../datas/plantList.js'

function ListCategory(){
    
    liste = plantList.filter((x,i,a) => a.indexOf(x) === i)

    return (
        <ul>
            {liste.map(x => <li>{x.catgeory}</li>)}
        </ul>
    )
}
export default ListCategory