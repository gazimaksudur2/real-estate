import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Shenzhen = () => {
  return (
    <div className="w-full h-screen">
      <MapContainer center={[22.5431, 114.0579]} zoom={13} className="h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[22.5431, 114.0579]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Shenzhen;
