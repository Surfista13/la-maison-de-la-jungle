import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleChange (e){
        setInputValue(e.target.value)
    }
    function handleSubmit (input,e){
        e.preventDefault()
        alert(input)
    }
    function handleBlur(event){
        event.target.value.indexOf("@") === -1 && alert("L'adresse email n'est pas correcte")
    }
  
    return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form onSubmit={(e)=>{handleSubmit(e,inputValue)}}>
                <input type="email" name="emailAdress" placeholder="Saisir votre email" onBlur={(e)=>{handleBlur(e)}} onChange={(e)=>{handleChange(e)}} value={inputValue}/> 
                <input type="submit" value="Envoyer" />  
            </form>           
		</footer>
	)
}
export default Footer