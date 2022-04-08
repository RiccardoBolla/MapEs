import React from "react";
import BingMapsReact from "bingmaps-react";

export default function BingMap() {

  const pushPin = {
    center: {
      latitude: 44.9199,
      longitude: 7.42641,
    },
    options: {
      title: "Qui",
    },
  }
  
  const pushPins = [pushPin];
  
  return (
    <BingMapsReact    
      bingMapsKey="Aja0Tco8W3lzzzc8lLt1Id9E16tO5ZC4ED9h8KeDRjqOWLfsmNBhSviB_jrAgqfG"
      height="1000px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="1000px"
      pushPins={pushPins}
      viewOptions={{ center: { latitude: 44.9199, longitude: 7.42641 } }}
      
    />
  );
}