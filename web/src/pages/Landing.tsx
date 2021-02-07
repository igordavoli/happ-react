
import '../styles/pages/landing.css'
import Logo from '../images/logo.svg'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Landing () {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={Logo} alt=""/>
            
                <main>
                    <h1>Leve a felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Muniz Freire</strong>
                    <span>Espírito Santo</span>
                </div>
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.3)"/>
                </Link>
            </div>  
        </div>
    );
}

export default Landing;