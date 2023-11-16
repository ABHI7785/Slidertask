import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { AiOutlineRight } from 'react-icons/ai';
import './Style/Card2.css'

const Card2 = () => {
  const imagess = [
    { img: "https://www.keralatourism.org/images/homecontentimage/walk-t-wood-2.jpg", name: "Walk through the Woods" },
    { img: "https://www.keralatourism.org/images/homecontentimage/house-boat-1.jpg", name: "Houseboat Cruise" },
    { img: "https://www.keralatourism.org/images/homecontentimage/rock_climbing.jpg", name: "Rock Climbing" },
    { img: "https://www.keralatourism.org/images/homecontentimage/walk-t-spices-3.jpg", name: "Spice Plantations" },
    { img: "https://www.keralatourism.org/images/homecontentimage/tent.jpg", name: "Camping" },
    { img: "https://www.keralatourism.org/images/homecontentimage/VARKALA_BEACh-paragliding.jpg", name: "Paragliding" }
  ];

  return (
    <div className='cardd2'>
    <div className='things-to-do' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <h2 style={{ width: '100%' }}>Things to do in Kerala</h2>

      {/* First Row */}
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        {imagess.slice(0, 3).map((data, index) => (
          <div key={index} style={{ margin: '10px', width: '30%', minWidth: '18rem', position: 'relative' }}>
            <Card>
              <Card.Img variant="top" src={data.img} className='card2' />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '5px' }}>
                <Card.Title>{data.name}</Card.Title>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        {imagess.slice(3).map((data, index) => (
          <div key={index} style={{ margin: '10px', width: '30%', minWidth: '18rem', position: 'relative' }}>
            <Card>
              <Card.Img variant="top" src={data.img} className='card2' />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '5px' }}>
                <Card.Title>{data.name}</Card.Title>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Button className='cta2'>FIND MORE ACTIVITIES <AiOutlineRight/></Button>
    </div>

    
    
    </div>
  )
}

export default Card2;
