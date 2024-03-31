// Data
import homeData from '../../data/home.json';
// ---------------

function Home({userdata}) {
  return (
    <section id="home" className="section full-width-section">
      <div className="section-wrapper block">
        <div className="home-left-part">
          <p className="site-des">{homeData.welcomeText}</p>
          <h1 className="entry-title">{userdata.about.name}</h1>
          <p className="site-info">{userdata.about.description}</p>

          <div className="social-links">
            {userdata.social_handles.map((link, i) => (
                            <a key={'social-link-' + i} href={link.url} target='_blank'>

              <div style={{display:'flex',flexDirection:"column",alignItems:'center',padding:"10px"}}>
                <div>
              <img src={link.image.url} style={{height:'30px', width:'30px'}}></img>
              </div>
              <div>
                {link.platform}
              </div>
              </div>
              </a>
            ))}
          </div>
        </div>
        <div className="home-right-part">
          <img src={userdata.about.avatar.url}></img>
        
        </div>
      </div>
    </section>
  );
}

export default Home;
