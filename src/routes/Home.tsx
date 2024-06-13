import heroImage from '../images/hero-image.jpg';

const Home =()=>{
      return (
            <div className="Home">
                  <div className="Home-content">
                        <h1>PDX Women Coders</h1>
                        <p>Empowering Portland women in technology to innovate, collaborate, and thrive</p>
                  </div>
                  <img src={heroImage} alt="Women sitting together" className="Home-image" />
            </div>
      )
}
export default Home;