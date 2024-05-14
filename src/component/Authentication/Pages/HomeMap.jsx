import { Map, Marker } from "pigeon-maps"
import { useState } from "react";

const HomeMap = () => {

    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
    return (
        <div className="w-[90%] md:w-[75%] lg:w-[75%] m-auto mt-20 lg:mb-20">
            <h1 className="text-[54px] text-center">Our Location</h1>
            <div className="w-[95%] md:w-[90%] mb-7 lg:w-[80%] m-auto text-center">
                <p>Nestled amidst serene landscapes, our location offers a harmonious blend of natural beauty and modern amenities. Discover tranquility in every corner, with vibrant culture and attractions just moments away. Experience the essence of relaxation here.</p>
            </div>
            <Map height={500} defaultCenter={[24.027377, 90.295849]} defaultZoom={13}>
      <Marker 
        width={50}
        anchor={[24.027377, 90.295849]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
      <Marker 
        width={50}
        anchor={[24.027377, 90.295849]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      >
          
      </Marker>
    </Map>
        </div>
    );
};

export default HomeMap;