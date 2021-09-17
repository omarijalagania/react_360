import React, { useState } from "react";

import { Pannellum } from "pannellum-react";
function App() {
  const image1 = "/image/PANO_20160611_163006.jpg";
  const image23 = "/image/sebastian-astecker-NaEDImEQXVw-unsplash.jpg";
  const [image2, setImage2] = useState({
    mediaPhoto: image1,
    test: false,
  });
  const hanldeClickImage = (evt, args) =>
    setImage2({
      mediaPhoto: image23,
      test: false,
    });

  return (
    <div>
      <Pannellum
        width="70%"
        height="500px"
        image={image2.mediaPhoto}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        hotspotDebug={false}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={12.41}
          yaw={50.76}
          handleClick={(evt, args) => hanldeClickImage(evt, args)}
        />
      </Pannellum>
      <button
        onClick={() => {
          setImage2({ test: true, mediaPhoto: image1 });
        }}
      >
        Go back
      </button>
    </div>
  );
}

export default App;
