import './Gallery.scss';
import galleryImg1 from "../../assets/images/category-img-1.png";
import galleryImg2 from "../../assets/images/category-img-2.png";
import galleryImg3 from "../../assets/images/category-img-3.png";
import galleryImg4 from "../../assets/images/category-img-4.png";
import galleryImg5 from "../../assets/images/category-img-5.png";

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">SHOP BY CATEGORIES</h2>
      <div className="gallery-grid">
        <div className="gallery-item gallery-item-small">
          <img src={galleryImg1} alt="Category 1" className="gallery-image" />
        </div>
        <div className="gallery-item gallery-item-small">
          <img src={galleryImg2} alt="Category 2" className="gallery-image" />
        </div>
        <div className="gallery-item gallery-item-small">
          <img src={galleryImg3} alt="Category 3" className="gallery-image" />
        </div>
        <div className="gallery-item gallery-item-small">
          <img src={galleryImg4} alt="Category 4" className="gallery-image" />
        </div>
      </div>
      <div className="gallery-item gallery-item-large">
          <img src={galleryImg5} alt="Category 5" className="gallery-image" />
      </div>
    </section>
  );
}