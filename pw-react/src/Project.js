import './css/App.css';
import './css/Project.css';
import './css/Footer.css';

/* GALLERY */
import terminus from './img/gallery/Terminus.png';
import arcana from './img/gallery/arcana.png';
import serendipity from './img/gallery/Serendipity.png';

/* COMPONENTS */
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Viewport from './components/Viewport';
import ViewportInfoCards from './components/ViewportInfoCards';

function Project() {
  return (
    <div id="main-page">
      <Header />
      <div id='top-section' className='debug-section'>
        <div id='top-title-section'>
          <span id='top-title-text'>Terminus</span>
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
        <div id='project-container'>
          <div id='project-container-sub'>
            <div id='viewport-container'>
                <Viewport />
            </div>
            <ViewportInfoCards />
            <div id='info-expand-container'>
              <span id='info-text'></span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
