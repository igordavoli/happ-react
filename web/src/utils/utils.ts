import Leflet from 'leaflet'
import MapIcon from '../images/icon.svg' 

const mapIcon = Leflet.icon({
  iconUrl: MapIcon,
  iconSize:[58, 68],
  iconAnchor:[29, 68],
  popupAnchor: [170, 2],
})

export default mapIcon;