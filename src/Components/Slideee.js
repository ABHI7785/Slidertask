import React, { useState } from 'react'
import { Form } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider"



const Slideee = () => {

    const [slideduration,setSlideduration] = useState(0.5)

    const images = [
        { url: "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg" },
        { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
        { url: "https://wallpaper.dog/large/10765811.jpg" },
        { url: "https://wallpapers.com/images/hd/1080p-nature-background-nfkrrkh7da3eonyn.jpg" },
    ];
  return (
    <div>

<SimpleImageSlider
            width={"100%"}
            height={"90vh"}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={slideduration}
            style={{width:"100%",height:'90vh'}}
        />
        <Form.Label>Set Transition</Form.Label>
      <Form.Range value={slideduration} max={10} onChange={(e)=>setSlideduration(e.target.value)}/>
      <span>{slideduration}</span>
    </div>


  )
}

export default Slideee