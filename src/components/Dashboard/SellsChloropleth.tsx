import { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { PathOptions } from 'leaflet';

// GeoJson data
import { statesData } from '../../data/us-states';

interface StateProperties {
  name: string;
  density: number;
}

interface StateFeature
  extends GeoJSON.Feature<GeoJSON.Polygon, StateProperties> {
  id: string;
}

interface StateFeatureCollection
  extends GeoJSON.FeatureCollection<GeoJSON.Polygon, StateProperties> {
  features: StateFeature[];
}

// Zoom to feature on click
function zoomToFeature(e: L.LeafletMouseEvent) {
  const map = e.target._map;
  const layer = e.target;
  const bounds = layer.getBounds();

  map.fitBounds(bounds);
}

function MinimapController(props: {
  stateName: string | undefined;
  density: number | null;
}) {
  return (
    <div className="absolute right-2 top-2 z-[400] rounded-md bg-white/80 p-0.5 shadow-lg">
      <p className="text-base font-semibold text-font-black">Sells by State</p>
      <div className="font-regular flex flex-col text-sm text-font-gray">
        {props.stateName ? (
          <span>State: {props.stateName}</span>
        ) : (
          'Hover over a state'
        )}
        {props.density !== null && <span>Customers: {props.density}</span>}
      </div>
    </div>
  );
}

function SellsChloropleth() {
  const [selectedState, setSelectedState] = useState<string | undefined>(
    undefined
  );
  const [selectedDensity, setSelectedDensity] = useState<number | null>(null);
  const [highlightedState, setHighlightedState] = useState<string | undefined>(
    undefined
  );

  // Function to assign colors based on values
  const getColor = (color: number | null) => {
    if (color === null) {
      return '#CCCCCC'; // Default color for null values
    }

    return color > 1000
      ? '#800026'
      : color > 500
      ? '#Bcolor0026'
      : color > 200
      ? '#E31A1C'
      : color > 100
      ? '#FC4E2A'
      : color > 50
      ? '#FD8D3C'
      : color > 20
      ? '#FEB24C'
      : color > 10
      ? '#FED976'
      : '#FFEDA0';
  };

  // Binds color and sets style for the GeoJSON
  const style = (
    feature: GeoJSON.Feature<GeoJSON.Polygon, StateProperties>
  ) => {
    const stateFeature = feature as StateFeature;
    const isHighlighted = highlightedState === stateFeature.properties.name;
    return {
      fillColor: getColor(stateFeature.properties.density),
      // Handles border settings on mouseover of a state
      weight: isHighlighted ? 5 : 2,
      color: isHighlighted ? '#666' : 'white',
      dashArray: isHighlighted ? '0' : '3',
      fillOpacity: 0.7
    };
  };

  // Binds highlight, zoom, and state selection events to features
  const onEachFeature = (feature: StateFeature, layer: L.Layer) => {
    layer.on({
      mouseover: (e: L.LeafletMouseEvent) => {
        const selectedLayer = e.target;
        setHighlightedState(feature.properties.name);
        setSelectedState(feature.properties.name);
        setSelectedDensity(feature.properties.density);
        selectedLayer.bringToFront();
      },
      mouseout: () => {
        setHighlightedState(undefined);
        setSelectedState(undefined);
        setSelectedDensity(null);
      },
      click: zoomToFeature
    });
  };

  return (
    <MapContainer center={[50, -120]} zoom={2} className="br-lg h-full w-full">
      {/* The lower layer map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap,</a> Population Density from US Census Bureau"
      />
      {/* The upper layer chloropleth */}
      <GeoJSON
        data={statesData as StateFeatureCollection}
        style={style as PathOptions}
        onEachFeature={onEachFeature}
      />
      <MinimapController stateName={selectedState} density={selectedDensity} />
    </MapContainer>
  );
}

export default SellsChloropleth;
