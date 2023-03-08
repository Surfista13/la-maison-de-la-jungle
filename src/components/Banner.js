import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    return (
        <div className="lmj-banner">
            <img src={logo} alt="La maison de la jungle" className='lmj-logo'/>
            <h1 className='lmj-title'>La Maison de la jungle</h1>
        </div>
    )   
}
export default Banner