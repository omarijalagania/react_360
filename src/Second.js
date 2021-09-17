import React from "react";

import { Pannellum } from "pannellum-react";

function Second() {
  const handleClick = (name) => {
    return name.image;
  };

  return (
    <div>
      <Pannellum
        width="70%"
        height="500px"
        image={"/image/sebastian-astecker-NaEDImEQXVw-unsplash.jpg"}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={12.41}
          yaw={50.76}
          handleClick={(evt, name) => handleClick(name)}
          name="image info"
        />
      </Pannellum>
    </div>
  );
}

export default Second;
