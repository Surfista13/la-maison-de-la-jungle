   import '../styles/Cart.css'
   function Cart() {
    let plants = [{id:0,name:"Monstera",price:8},{id:1,name:"Lierre",price:10},{id:2,name:"Fleurs",price:15}]
    return(
        <div className="lmj-cart">
            <ul>
            {plants.map(x => <li key={x.id}>{x.name} {x.price}€</li>)  }
            </ul>  
        </div>
    )}

export default Cart