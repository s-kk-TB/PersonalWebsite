import './css/App.css';
import './css/Footer.css';

/* GALLERY */
import terminus from './img/gallery/Terminus.png';
import arcana from './img/gallery/arcana.png';
import serendipity from './img/gallery/Serendipity.png';

/* COMPONENTS */
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import getNavBttnStyle from './js/projectsPage';

/* FILLED ICONS */
import modsFilled from './img/filled/icons8-tools.png';

/* UNFILLED ICONS */
import modsUnfilled from './img/unfilled/icons8-tools.png';
import projectUnfilled from './img/unfilled/icons8-drawing.png';
import galleryUnfilled from './img/unfilled/icons8-gallery.png';
import { useEffect } from 'react';

let navImgArr = [modsUnfilled,projectUnfilled,galleryUnfilled];

function Mods() {
  useEffect(() => {
    getNavBttnStyle(0, modsFilled, navImgArr)
  })
  return (
    <div id="main-page">
      <Header />
      <div id='top-section' className='debug-section'>
        <div id='top-title-section'>
          <span id='top-title-text'>Welcome to my Mods</span><br></br>
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
              This section showcases 3D projects created during my free
              time that are just for posting on social media.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mods;
