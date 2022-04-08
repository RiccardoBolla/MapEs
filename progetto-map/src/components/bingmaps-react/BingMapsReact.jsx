import React from "react";
import BingMapsReact from "bingmaps-react";

export default function BingMap() {
  return (
    <BingMapsReact
      bingMapsKey="AtwtZKlcqle6ldCCZ1JlJbmvlSn5XXDIvSpas7bsQZ_wr46_7EafmL_nHZmjlmLv"
      height="1000px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="1000px"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
    />
  );
}