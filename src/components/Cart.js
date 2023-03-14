   import '../styles/Cart.css'
   import {useState} from 'react'

   
   function Cart({cart,updateCart}) {
    const [isOpen,setIsOpen] = useState(false);
    
    if(isOpen === true){
        return(
            <div className="lmj-cart">
         <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(!isOpen)}>
            Fermer panier
        </button>  
                <h2>Panier</h2>
                {cart.map((elt)=><li key={elt.id}>{elt.name} {elt.price}€   qte:{elt.quantity}  total:{elt.quantity * elt.price}€</li>)}
                <h3>Total: {cart.map((elt)=>elt.price*elt.quantity).reduce((accumulator, currentValue) => accumulator + currentValue,
  0)} €</h3>
                <button onClick={() => updateCart([])}>
                    Vider le panier
                </button>
            </div>
        )
    }
    return(
        <div className="lmj-cart">
         <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(!isOpen)}>
            Ouvrir panier
        </button>  
        </div>
    )
   }

export default Cart