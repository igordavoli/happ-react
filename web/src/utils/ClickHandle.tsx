/* eslint-disable no-mixed-operators */
import { LeafletMouseEvent } from "leaflet"
import React, { useState } from "react"
import { Marker, useMapEvents } from "react-leaflet"
import mapIcon from "./utils"

export default 
function ClickHandle() {
  const [_position, setPosition] = useState({latitude: 0, longitude: 0})

    useMapEvents({
      click: (event:LeafletMouseEvent) => { 
        const {lat , lng} = event.latlng
        setPosition({
          latitude: lat,
          longitude: lng,
        })
      },
    })

  return (
    _position.latitude &&
      <div>
        <Marker 
          interactive={false} 
          icon={mapIcon} 
          position={[_position.latitude, _position.longitude]}
          /> 
        {/* <input type="hided" value={_position.latitude} onChange={(event) => setLat(event.target.value)}/>
        <input type="hided" value={_position.longitude}  onChange={(event) => setLon(event.target.value)}/> */}
      </div>

    || null)
}