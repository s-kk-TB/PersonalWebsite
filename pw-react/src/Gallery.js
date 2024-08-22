import './css/App.css';
import './css/Gallery.css';
import './css/Footer.css';

import getNavBttnStyle from './js/projectsPage';

/* FILLED ICONS */
import galleryFilled from './img/filled/icons8-gallery.png';

/* UNFILLED ICONS */
import modsUnfilled from './img/unfilled/icons8-tools.png';
import projectUnfilled from './img/unfilled/icons8-drawing.png';
import galleryUnfilled from './img/unfilled/icons8-gallery.png';

/* GALLERY */
import terminus from './img/gallery/Terminus.png';
import arcana from './img/gallery/arcana.png';
import serendipity from './img/gallery/Serendipity.png';
import akkan from './img/gallery/Akkans corruption.png';
import fedora from './img/gallery/BetteFedora.jpg';
import blackhole from './img/gallery/black hole.png';
import theatremasks from './img/gallery/theatre masks.png';

/* COMPONENTS */
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GalleryImgSlide from './components/GalleryImgSlide';

/* FUNCTIONALITY */
import { useEffect } from 'react';

let navImgArr = [modsUnfilled,projectUnfilled,galleryUnfilled];

function Gallery() {
  useEffect(() => {
    getNavBttnStyle(2, galleryFilled, navImgArr)
  })
  return (
    <div id="main-page">
      <Header />
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
          <div className='gallery-column'>
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
          </div>
          <div className='gallery-column'>
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
          </div>
          <div className='gallery-column'>
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
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
