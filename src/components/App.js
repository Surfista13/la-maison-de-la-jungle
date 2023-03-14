import '../App.css';
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer';
import { useState } from 'react';
import ListCategory from './Category';


function App() {
    
    let [cart,updateCart] = useState([])
    let [category,updateCategory] = useState([])
    
    return (
		<div>
			<Banner />
            <ListCategory category={category} updateCategory={updateCategory}/>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart}/>
				<ShoppingList cart={cart} updateCart={updateCart} category={category}/>
			</div>
			<Footer />
		</div>
	)
}

export default App
