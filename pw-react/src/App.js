/* UNFILLED ICONS */
import getNavBttnStyle from './js/projectsPage';

import './css/App.css';
import './css/ProjectCards.css';
import './css/Footer.css';

/* ICONS FILLED*/
import blenderFilled from './img/filled/icons8-blender.png';
import photoshopFilled from './img/filled/icons8-photoshop.png';
import vsUnFilled from './img/filled/icons8-visual-studio.png';
import premiereproFilled from './img/filled/icons8-adobe-premiere-pro.png';
import modsFilled from './img/filled/icons8-tools.png';
import projectFilled from './img/filled/icons8-drawing.png';
import galleryFilled from './img/filled/icons8-gallery.png';


/* ICONS UNFILLED */
import blenderUnfilled from './img/unfilled/icons8-blender.png';
import photoshopUnfilled from './img/unfilled/icons8-photoshop.png';
import vsUnfilled from './img/unfilled/icons8-visual-studio.png';
import premiereproUnfilled from './img/unfilled/icons8-adobe-premiere-pro.png';
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

/* OTHER */
import theatreMasks from './img/other/theatre masks.png';

/* COMPONENTS */
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCards';
import Footer from './components/Footer';

import { useEffect } from 'react';

let navImgArr = [modsUnfilled,projectUnfilled,galleryUnfilled];

function App() {
  useEffect(() => {
    getNavBttnStyle(1, projectFilled, navImgArr)
  })
  return (
    <div id="main-page">
      <Header />
      <div id='top-section' className='debug-section'>
        <div id='top-title-section'>
          <span id='top-title-text'>Welcome to my Showcase</span><br></br>
          <span id='top-title-info'>Personal 3D works, mods & more</span>
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
        <div id='bottom-section-projects-container'>
          <div id='project-cards-container'>
            <ProjectCard 
              projectTitle='THEATRE MASKS'
              blenderImg={blenderFilled}
              photoshopImg={photoshopFilled}
              vsImg={vsUnfilled}
              premiereproImg={premiereproUnfilled}
              previewImg={theatreMasks}
            />
            <ProjectCard 
              projectTitle='TERMINUS'
              blenderImg={blenderFilled}
              photoshopImg={photoshopUnfilled}
              vsImg={vsUnFilled}
              premiereproImg={premiereproFilled}
              previewImg={terminus}
            />
            <ProjectCard 
              projectTitle='BETTE FEDORA'
              blenderImg={blenderFilled}
              photoshopImg={photoshopUnfilled}
              vsImg={vsUnFilled}
              premiereproImg={premiereproFilled}
              previewImg={fedora}
            />
            {/* <ProjectCard 
              projectTitle='ARCANA'
              blenderImg={blenderUnfilled}
              photoshopImg={photoshopFilled}
              vsImg={vsUnFilled}
              premiereproImg={premiereproUnfilled}
              previewImg={arcana}
            /> */}
          </div>
        </div>  
      </div>
      <Footer />
    </div>
  );
}

export default App;
