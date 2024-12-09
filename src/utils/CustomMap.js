/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { LoadScript, GoogleMap, Marker, Autocomplete } from "@react-google-maps/api";

const CustomMap = ({
  googleMapsApiKey,
  defaultPosition = { lat: 24.7136, lng: 46.6753 }, // Default center (Riyadh)
  onMarkerPositionChange,
}) => {
  const [markerPosition, setMarkerPosition] = useState(defaultPosition);
  const [searchQuery, setSearchQuery] = useState("");
  const autocompleteRef = useRef(null);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latLng.toJSON();
    setMarkerPosition({ lat, lng });
    if (onMarkerPositionChange) {
      onMarkerPositionChange({ lat, lng });
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry) {
      const { lat, lng } = place.geometry.location;
      setMarkerPosition({ lat: lat(), lng: lng() });
      if (onMarkerPositionChange) {
        onMarkerPositionChange({ lat: lat(), lng: lng() });
      }
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full bg-white">
      <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["places"]}>
        {/* Search Input with Autocomplete */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-50 bg-white p-2 rounded shadow-md">
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceSelect}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for a location"
              className="w-72 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Autocomplete>
        </div>

        {/* Map */}
        <GoogleMap
          mapContainerClassName="w-[60vw] h-[60vh] rounded-lg shadow-md"
          center={markerPosition}
          zoom={10}
          onClick={handleMapClick}
        >
          {/* Marker */}
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default CustomMap;



// Example: Using the Map

// const [position, setPosition] = useState(null);

//   const handleMarkerPositionChange = (newPosition) => {
//     setPosition(newPosition);
//     console.log("New Marker Position:", newPosition);
//   };
//   <CustomMap
//   googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
//   defaultPosition={{ lat: 24.7136, lng: 46.6753 }}
//   onMarkerPositionChange={handleMarkerPositionChange}
// />