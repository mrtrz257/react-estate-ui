import "./pin.scss"
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { Icon } from 'leaflet'
import marker from '/redpin.png';

const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [32,32]
   })

const Pin = ( {item} ) => {
  return (
        <Marker position={[item.latitude, item.longitude]} icon={myIcon}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.img} alt="item-img" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>
                            {item.title}
                        </Link>
                        <span>
                            {item.bedroom} bedroom/s
                        </span>
                        <b>
                            ${item.price}
                        </b>
                    </div>
                </div>
            </Popup>
        </Marker>
  )
}

export default Pin