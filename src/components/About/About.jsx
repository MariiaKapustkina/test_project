import "./About.scss";

import Plant from "../../assets/images/plant-about.png";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-grid-one">
      <h1 className="about-title">ABOUT US</h1>
      <p className="about-text-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className="about-grid-two">
      <div className="about-image-wrapper">
        <img src={Plant} alt="About Us Leaf" className="about-image" />
      </div>
      </div>
      <div className="about-grid-one about-grid-one--bottom">
      <p className="about-text-bottom">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <button className="about-learn-more-button">LEARN MORE</button>
      </div>
    </section>
  )
}