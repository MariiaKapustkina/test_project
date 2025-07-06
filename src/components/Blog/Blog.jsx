import './Blog.scss';

import plantImg1 from '../../assets/images/blog-img1.png';
import plantImg2 from '../../assets/images/blog-img2.png';
import plantImg3 from '../../assets/images/blog-img3.png';

export default function Blog() {
  return(
    <section className='blog-section'>
      <h2 className='blog-title'>NEW COLLECTION</h2>
      <div className='blog-gallery'>
        <div className='blog-item'>
          <img src={plantImg1} alt="New Collection Plant 1" className='blog-image'/>
        </div>
        <div className='blog-item'>
          <img src={plantImg2} alt="New Collection Plant 2" className='blog-image'/>
        </div>
        <div className='blog-item'>
          <img src={plantImg3} alt="New Collection Plant 3" className='blog-image'/>
        </div>
      </div>
      <p className='blog-description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </section>
  )
}