const Testimonials=({userdata})=>{
return (
    <section id="testimonials" className="section">
    <div className="section-wrapper block">
      <div className="" >
        <div className="row">
          <div className="">
            <div className="testimonials-wrapper">
            {userdata.map((serv, i) => (
                <div key={'testimonials-' + i} className='testimonials-holder'>
                  <div style={{display:'flex',flexDirection:'column',marginRight:"30px",width:"50%"}}>
                  <img src={serv.image.url} alt={serv.name} />
                  <h4 className="testimonials-title">{serv.name}</h4>
                  </div>
                  <div className="testimonials-text">
                  <span style={{fontSize:"50px",fontWeight:"bolder"}}>&#8220;</span>
                    {serv.review }
                    <span style={{fontSize:"50px",fontWeight:"bolder"}}>&#8221;</span>

                    </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}
export default Testimonials