import React from "react";

import { Pannellum } from "pannellum-react";

function App() {

  const hotspotIcon = (hotSpotDiv) => {
    const image = document.createElement('img');
    image.classList.add('image');
    image.setAttribute('width', '30');
    image.setAttribute('height', '30');
    image.setAttribute('src',    'https://img.icons8.com/material/4ac144/256/camera.png');
    hotSpotDiv.appendChild(image);
  }

  <Pannellum.Hotspot
   type="custom"
   pitch={12.41}
   yaw={117.76}
   tooltip={hotspotIcon}
   name="image info"
/>
  
  return (
    <div>
      <Pannellum
  width="100%"
  height="500px"
  image={'/image/timothy-oldfield-luufnHoChRU-unsplash.jpg'}
  pitch={10}
  yaw={180}
  hfov={110}
  autoLoad
  showZoomCtrl={false}
>
  <Pannellum.Hotspot
    type="custom"
    pitch={12.41}
    yaw={117.76}
    handleClick={(evt, name) => console.log(name)}
    name="image info"
  />
</Pannellum>
    </div>
  );
}

export default App;
