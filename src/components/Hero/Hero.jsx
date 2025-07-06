import plantImage from "../../assets/images/plant1.png";
import './Hero.scss';

export default function Hero() {
  return(
    <section className="hero-section">
      <div className="hero-content">
      <div className="hero-description-image-wrapper">
        <div className="hero-description-block">
          <h1 className="hero-title">ORGANIC FASHION</h1>
          <p className="hero-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
         <button className="shop-now-button">SHOP NOW</button>
        </div>

      <div className="hero-image-container"> 
        <img src={plantImage} alt="Potted plant" className="hero-image" />
      </div>
    </div>
    </div>
    </section>
  )
}