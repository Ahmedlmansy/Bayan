"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson";

export default function WorldMap() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ComposableMap>
        <ZoomableGroup zoom={1} center={[0, 20]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E5E7EB"
                  stroke="#D1D5DB"
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: "#7E3AF2",
                      outline: "none",
                      cursor: "pointer",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
