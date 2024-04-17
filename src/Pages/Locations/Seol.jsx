import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Seol = () => {
  return (
    <div className="w-full h-screen">
      <MapContainer center={[37.5665, 126.9780]} zoom={13} className="h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.5665, 126.9780]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Seol;
