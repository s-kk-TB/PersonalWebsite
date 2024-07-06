import './css/App.css';
import './css/Gallery.css';
import './css/Footer.css';

/* GALLERY */
import terminus from './img/gallery/Terminus.png';
import arcana from './img/gallery/arcana.png';
import serendipity from './img/gallery/Serendipity.png';
import akkan from './img/gallery/Akkans corruption.png';
import fedora from './img/gallery/BetteFedora.jpg';
import blackhole from './img/gallery/black hole.png';
import theatremasks from './img/gallery/theatre masks.png';

/* OTHER */
import tbProfile from './img/other/tb_profile.jpeg';

/* COMPONENTS */
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GalleryImgSlide from './components/GalleryImgSlide';

/* FUNCTIONALITY */
import { CloseImgHighlight } from './js/GalleryFunctionality';

function Gallery() {
  return (
    <div id="main-page">
        <div id='gallery-img-highlight'>
          <button onClick={
            () => CloseImgHighlight()
          }></button>
          <img id='gallery-img' src={terminus} alt='img-highlight'></img>
        </div>
      <div id='header-section' className='debug-section'>
        <div id="header-name-section">
          <img src={tbProfile} alt='Profile icon'></img><span>TrolledBartholomew</span>
        </div>
        <div id="header-skills-section">
          <select>
            <option selected='selected' disabled hidden>Skills</option>
            <option disabled>HTML</option>
            <option disabled>CSS</option>
            <option disabled>Javascript</option>
            <option disabled>NodeJs</option>
            <option disabled>ReactJs</option>
            <option disabled>React Three Fiber</option>
            <option disabled>Git</option>
            <option disabled>Typescript</option>
            <option disabled>Java</option>
            <option disabled>PHP</option>
            <option disabled>Blender</option>
            <option disabled>Figma</option>
            <option disabled>VS code</option>
            <option disabled>Microsoft Office Suite</option>
          </select>
        </div>
      </div>
      <div id='top-section' className='debug-section'>
        <div id='top-title-section'>
          <span id='top-title-text'>Welcome to my Gallery</span><br></br>
        </div>
        <div id='img-slideshow-container'>
          <img src={terminus} alt='slide 1'></img>
          <img src={arcana} alt='slide 2'></img>
          <img src={serendipity} alt='slide 3'></img>
        </div>
      </div>
      <div id='middle-section' className='debug-section'>
        <div className='middle-nav-section'>
          <Navbar />
        </div>
      </div>
      <div id='bottom-section' className='debug-section'>
        <div className='bottom-info-block'>
          <div className='bottom-info-card'>
            <div>
              This section showcases all media relating to the various projects I have done.
            </div>
          </div>
        </div>
        <div id='gallery-img-container'>
          <GalleryImgSlide 
            GalleryImg={terminus}
            AltText='Terminus'
          />
          <GalleryImgSlide 
            GalleryImg={serendipity}
            AltText='Serendipity'
          />
          <GalleryImgSlide 
            GalleryImg={akkan}
            AltText='Akkans corruption'
          />
          <GalleryImgSlide 
            GalleryImg={fedora}
            AltText="Bette's Fedora"
          />
          <GalleryImgSlide 
            GalleryImg={blackhole}
            AltText='Black hole'
          />
          <GalleryImgSlide 
            GalleryImg={theatremasks}
            AltText='Theatre masks'
          />
          <GalleryImgSlide 
            GalleryImg={arcana}
            AltText='Arcana cards'
          />
          <GalleryImgSlide 
            GalleryImg={fedora}
            AltText="Bette's Fedora"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
