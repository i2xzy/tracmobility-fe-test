import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const VehicleMap = () => {
  return (
    <div>
      <Typography variant="h6">Vehicle Map</Typography>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} fill="#03989E" />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default VehicleMap;
