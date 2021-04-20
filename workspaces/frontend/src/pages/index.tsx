import { useState } from 'react';
import { latLng } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { generateRoute } from 'geo-route-generator';
import './index.scss';
import { BaseLayout } from '../components/basePage';

export const MainMap = () => {
  const startPos = {
    lat: 40.413599,
    lng: -3.709558,
  };

  const finalPos = {
    lat: -47.190444,
    lng: -69.286307,
  };

  const [actualPos, setActualPos] = useState(startPos);
  const steps = 100;
  const route = generateRoute(startPos, finalPos, steps);

  const changeLocation = (i: number = 0) => {
    setTimeout(() => {
      setActualPos(() => {
        console.log(`Index ${i} lat: ${route[i].lat}, lng: ${route[i].lng}`);
        return {
          lat: route[i].lat,
          lng: route[i].lng,
        };
      });
      i < steps - 1 && changeLocation(i + 1);
    }, 100);
  };

  return (
    <BaseLayout>
      <div>
        <MapContainer
          center={latLng(actualPos)}
          zoom={5}
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={latLng(startPos)}>
            <Popup>Start Position</Popup>
          </Marker>
          <Marker position={latLng(actualPos)}>
            <Popup className='actualPos'>Actual Position</Popup>
          </Marker>

          <Marker position={latLng(finalPos)}>
            <Popup>End Position</Popup>
          </Marker>
        </MapContainer>
        <button
          onClick={() => changeLocation()}
          className='mt-2 btn btn-primary'>
          Change position
        </button>
      </div>
    </BaseLayout>
  );
};