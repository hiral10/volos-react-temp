import React from 'react'
import Carousel from 'react-grid-carousel'

const Testimonials = ({ userdata }) => {
  return (
    <section id="testimonials" className="section">
      <div className='testimonials'>
      <Carousel cols={2} rows={1} gap={10} loop autoplay={1000}>
        {userdata.map((serv, i) => (

          <Carousel.Item key={'testimonials-' + i}>
            <div className='testimonials-holder'>
              <div style={{ display: 'flex', flexDirection: 'column', marginRight: "30px", width: "50%" }}>
                <img src={serv.image.url} alt={serv.name} />
                <h4 className="testimonials-title">{serv.name}</h4>
              </div>
              <div className="testimonials-text">
                <span style={{ fontSize: "50px", fontWeight: "bolder" }}>&#8220;</span>
                {serv.review}
                <span style={{ fontSize: "50px", fontWeight: "bolder" }}>&#8221;</span>
              </div>
            </div>
          </Carousel.Item>

        ))}

      </Carousel>
      </div>
    </section>
  )
}
export default Testimonials