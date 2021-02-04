
import '../styles/pages/orphanages-map.css'
import Icon from '../images/icon.svg'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={Icon} alt=""/>
                    <main>
                        <h2>Escolha um orfanato no mapa</h2>
                        <p>Muintas crianças estão esperando a sua visita :)</p>
                    </main>
                </header>
            <footer>
                <strong>Muniz Freire</strong>
                <span>Espírito Santo</span>
            </footer>
            </aside>

            <MapContainer 
                center={[-20.464859523340937, -41.41179497811811]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
               {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>  */}
               <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/> 
            </MapContainer>
            
            <Link to="" className="create-orphanage">
                <FiPlus size={ 32 } color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;