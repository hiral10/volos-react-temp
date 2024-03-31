// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

// Images
import item1 from "../../../../assets/images/portfolio/items/item_01.jpg"
import item2 from "../../../../assets/images/portfolio/items/item_02.jpg"
import item3 from "../../../../assets/images/portfolio/items/item_03.jpg"

// Styles
import "./portfolio-item.css"

// -------------------

function PortfolioItem1({image,title,description,liveurl,githuburl,techStack}) {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="row">
          <div className="one-half width-55">
            <div className="image-slider-wrapper relative block-right">
              <Swiper
                pagination={{ clickable: true }}
                loop={true}
                modules={[Pagination]}
                className="portfolio-slider"
              >
                <SwiperSlide>
                  <img src={image} alt="portfolio item 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image} alt="portfolio item 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={image} alt="portfolio item 1" />
                </SwiperSlide>
              </Swiper>
              <div className="skill-used">
              {techStack.map((item, index) => (
                <div className="skill-set" key={index}>{item}</div>
              ))}

            </div>
            </div>
          </div>

          <div className="one-half width-40 last">
            <h2 className="entry-title section-title">{title}</h2>

            <p className="section-info">
            </p>
            
            <p>
            {description}
            </p>

            <p style={{display:'flex',flexDirection:'column',margin:'auto',width:'fit-content'}}>
              <a style={{margin:'5px'}} className="button" href={liveurl} target="_blank">View Project</a>
              <a style={{margin:'5px'}} className="button" href={githuburl} target="_blank">View Code &lt;&#47; &gt;</a>

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem1
