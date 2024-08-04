import React, { useEffect, useState } from 'react'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png'; // Import default marker icon
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Main from '../components/Layout/Main'
import '../components/Styles/ContactStyles.scss'
import 'leaflet/dist/leaflet.css';
import AnimatedLetters from '../components/Utils/AnimatedLetters/index'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import 'animate.css';
import Magnetic from '../components/Utils/Magnetic'
const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const customMarkerIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    shadowSize: [41, 41], // Size of the shadow
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    const serviceId = 'service_ppnqtxs'
    const templateId = 'template_mpkb75u'
    const publicKey = 'reo2_FtxKu5NWUqRt'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Mihir Nebani',
      message: message,
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email Sent Successfully!', response)
        setName('')
        setEmail('')
        setMessage('')
        alert('Message successfully sent!')
      })
     
      // window.location.reload(false)
      .catch((error) => {
        console, error('Error Sending Email:', error)
      })
  }

  return (
    <Main>
      <div style={{minHeight : '100vh' , color : '#fff'}} className='gray'>
        <div className='text-style'>
        <span className='spann'>"Elegantly opening doors to your inquiries, one click away."</span> 
        <br/> 
        <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'U', 's']}
              idx={15}
            />
            <hr/>
        </div>
        <div style={{display : "flex"}}>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul >
                <li style={{marginBottom : '3rem'}}>
                  <input
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </li>
                <li style={{marginBottom : '3rem'}}>
                  <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </li>
                <li style={{marginBottom : '3rem'}}>
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </li>
                <Magnetic>
                  <input type="submit" className="flat-button" value="Submit" />
                </Magnetic>
              </ul>
            </form>
        </div>
        <div className="info-map">
          Aranyam Design & Art,
          <br />
          4-E 22, Shastri Nagar <br />
          Bhilwara <br />
          <br />
          <span>codeunity@gmail.com</span>
        </div>
        <div className="map-wrap" style={{ height: "400px", width: "100%" }}>
  <MapContainer
    center={[25.329202253283043, 74.64465265303431]}
    zoom={18}
    style={{ height: "300%", width: "0%" }} 
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[25.329202253283043, 74.64465265303431]} icon={customMarkerIcon}>
      <Popup>liked our design ? come over for a cup of coffee .</Popup>
    </Marker>
  </MapContainer>
</div>
        </div>
      </div>
    </Main>
  )
}

export default Contact