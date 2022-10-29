import GoogleMapReact from 'google-map-react';
import { useContext } from 'react';
import cepDataContext from '../../contexts/cepDataContext';
import { FaMapMarkerAlt } from "react-icons/fa"

const Marker = () => <div style={{fontSize:'20px', color:'red'}}><FaMapMarkerAlt /></div>;

export default function Map(){
    const { cepData } = useContext(cepDataContext)   
    if(!cepData.lat && !cepData.long){
        return
    }
    const defaultProps = {
        center: {lat: cepData.lat, lng: cepData.long},
        zoom: 15
    };

    return (
    
        <div style={{ height: '400px', width: '90%', marginBottom:'50px' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyC8H08TnsIQSyqv1lnrcV21WqymkF7pmyc' }}
            defaultCenter={{lat: cepData.lat, lng: cepData.long}}
            defaultZoom={defaultProps.zoom}
            center={{lat: cepData.lat, lng: cepData.long}}
        >
            <Marker
                lat={cepData.lat}
                lng={cepData.long}
            />
        </GoogleMapReact>
        </div>
  );
}