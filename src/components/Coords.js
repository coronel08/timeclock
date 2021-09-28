import React, { useState } from 'react'

function Coords() {
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [status, setStatus] = useState(null)

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation not supported')
        } else {
            setStatus('Geolocation working ...')
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null)
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)
            }, () => {
                setStatus('Unable to retrieve location')
            })
        }
    }

    return (
        <div className="m-5">
            <button onClick={getLocation} >Get Location</button>
            <p>{status}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
        </div>
    )
}

export default Coords
