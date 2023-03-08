   function Cart() {
    let plants = [{name:"Monstera",price:8},{name:"Lierre",price:10},{name:"Fleurs",price:15}]
    return(
        <ul>
          {plants.map(x => <li>{x.name} {x.price}€</li>)  }
        </ul>
    )}

export default Cart