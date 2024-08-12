import './css/App.css';
import './css/Project.css';
import './css/Footer.css';

/* ICONS FILLED*/
import blenderFilled from './img/filled/icons8-blender.png';
import photoshopFilled from './img/filled/icons8-photoshop.png';
import vsFilled from './img/filled/icons8-visual-studio.png';
import premiereproFilled from './img/filled/icons8-adobe-premiere-pro.png';
import arrowFilled from './img/filled/icons8-arrow.png';
import infoFilled from './img/filled/icons8-info.png';

/* ICONS UNFILLED */
import blenderUnfilled from './img/unfilled/icons8-blender.png';
import photoshopUnfilled from './img/unfilled/icons8-photoshop.png';
import vsUnfilled from './img/unfilled/icons8-visual-studio.png';
import premiereproUnfilled from './img/unfilled/icons8-adobe-premiere-pro.png';
import arrowUnfilled from './img/unfilled/icons8-arrow.png';
import infoUnfilled from './img/unfilled/icons8-info.png';

/* GALLERY */
import terminus from './img/gallery/Terminus.png';
import arcana from './img/gallery/arcana.png';
import serendipity from './img/gallery/Serendipity.png';

/* OTHER */
import tbProfile from './img/other/tb_profile.jpeg';

/* COMPONENTS */
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Viewport from './components/Viewport';

/* FUNCTIONALITY */
import changeIcon from './js/ProjectFunc';

/* ICON ARRAYS */
const unfilledIconSet = [blenderUnfilled,photoshopUnfilled,premiereproUnfilled,vsUnfilled];
const filledIconSet = [blenderFilled,photoshopFilled,premiereproFilled,vsFilled];

function Project() {
  return (
    <div id="main-page">
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
            <div id='viewport-section-info'>
              <div className='info-container' id='info-container-left'>
                <button onClick={
                  () => changeIcon(unfilledIconSet,filledIconSet,0,'Hello from blender')
                }>
                  <img className='info-icon' src={blenderUnfilled} alt='blender'></img>
                </button>
                <button onClick={
                  () => changeIcon(unfilledIconSet,filledIconSet,1, 'Greetings from photoshop')
                }>
                  <img className='info-icon' src={photoshopUnfilled} alt='photoshop'></img>
                </button>
                <button onClick={
                  () => changeIcon(unfilledIconSet,filledIconSet,2, 'Salutations from premier pro')
                }>
                  <img className='info-icon' src={premiereproUnfilled} alt='premiere pro'></img>
                </button>
                <button onClick={
                  () => changeIcon(unfilledIconSet,filledIconSet,3, 'Hi from vs code')
                }>
                  <img className='info-icon' src={vsUnfilled} alt='vs code'></img>
                </button>
              </div>
              <div className='info-container' id='info-container-right'>
                <button>
                  <img src={infoUnfilled} alt='info'></img>
                </button>
              </div>
            </div>
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
