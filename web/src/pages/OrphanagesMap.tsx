
import '../styles/pages/orphanages-map.css'
import Icon from '../images/icon.svg'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mapIcon from '../utils/utils'
import { useEffect, useState } from 'react'
import api from '../services/api'

interface Orphanage {
  id: number,
  lat: number,
  lon: number,
  name: string,
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  
  useEffect(() => {
    api.get('orphanages').then(res => {
      setOrphanages(res.data);
    })
  }, []);
   
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={Icon} alt=""/>
                    <main>
                        <h2>Escolha um orfanato no mapa</h2>
                        <p>Muitas crianças estão esperando a sua visita :)</p>
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
                {orphanages.map(orphanage => {
                  return (
                    <Marker
                      icon={mapIcon}
                      position={[orphanage.lat, orphanage.lon]} 
                      key={orphanage.id}
                    >
                      <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {orphanage.name}
                        <Link to={`orphanage/${orphanage.id}`}>
                          <FiArrowRight size={20} color="#fff"/>
                        </Link>
                      </Popup>
                    </Marker>
                  )
                })}
            </MapContainer>
            
            <Link to="/orphanage/create" className="create-orphanage">
                <FiPlus size={ 32 } color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;