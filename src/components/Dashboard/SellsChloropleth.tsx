
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { statesData } from "../../data/us-states";
import "leaflet/dist/leaflet.css";
import { PathOptions } from "leaflet";

interface StateProperties {
  name: string;
  density: number;
}

interface StateFeature extends GeoJSON.Feature<GeoJSON.Polygon, StateProperties> {
  id: string;
}

interface StateFeatureCollection extends GeoJSON.FeatureCollection<GeoJSON.Polygon, StateProperties> {
  features: StateFeature[];
}

function SellsChloropleth() {

  // Function to assign colors based on values
  const getColor = (color: number | null) => {
    if (color === null) {
        return "#CCCCCC"; // Default color for null values
      }

    return color > 1000
      ? "#800026"
      : color > 500
      ? "#Bcolor0026"
      : color > 200
      ? "#E31A1C"
      : color > 100
      ? "#FC4E2A"
      : color > 50
      ? "#FD8D3C"
      : color > 20
      ? "#FEB24C"
      : color > 10
      ? "#FED976"
      : "#FFEDA0";
  };

  const style = (feature: GeoJSON.Feature<GeoJSON.Polygon, StateProperties>) => {
    const stateFeature = feature as StateFeature;
    return {
      fillColor: getColor(stateFeature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };
  const FeaturePopup = (feature: StateFeature, layer: L.Layer) => {
    layer.bindPopup(`<h1>${feature.properties.name}</h1>`);
  };
  
  return (
    <MapContainer center={[50, -120]} zoom={2} className="w-full h-full br-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
      />
      <GeoJSON data={statesData as StateFeatureCollection} style={style as PathOptions} onEachFeature={FeaturePopup}/>
    </MapContainer>
  );
}

export default SellsChloropleth;
