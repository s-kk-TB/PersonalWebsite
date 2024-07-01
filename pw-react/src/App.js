import './css/App.css';
import './css/ProjectCards.css';
import './css/Footer.css';
import getNavBttnStyle from './js/projectsPage';

/* ICONS FILLED*/
import instagramFilled from './img/filled/icons8-instagram.png';
import redditFilled from './img/filled/icons8-reddit.png';
import twitterFilled from './img/filled/icons8-twitter.png';
import modsFilled from './img/filled/icons8-tools.png';
import projectFilled from './img/filled/icons8-drawing.png';
import galleryFilled from './img/filled/icons8-gallery.png';
import blenderFilled from './img/filled/icons8-blender.png';
import photoshopFilled from './img/filled/icons8-photoshop.png';
import vsUnFilled from './img/filled/icons8-visual-studio.png';
import premiereproFilled from './img/filled/icons8-adobe-premiere-pro.png';


/* ICONS UNFILLED */
import dwnArrowUnfilled from './img/unfilled/icons8-arrow.png';
import modsUnfilled from './img/unfilled/icons8-tools.png';
import projectUnfilled from './img/unfilled/icons8-drawing.png';
import galleryUnfilled from './img/unfilled/icons8-gallery.png';
import instagramUnfilled from './img/unfilled/icons8-instagram.png';
import redditUnfilled from './img/unfilled/icons8-reddit.png';
import twitterUnfilled from './img/unfilled/icons8-twitter.png';
import blenderUnfilled from './img/unfilled/icons8-blender.png';
import photoshopUnfilled from './img/unfilled/icons8-photoshop.png';
import vsUnfilled from './img/unfilled/icons8-visual-studio.png';
import premiereproUnfilled from './img/unfilled/icons8-adobe-premiere-pro.png';

/* GALLERY */
import terminus from './img/gallery/Terminus.png';
import arcana from './img/gallery/arcana.png';
import serendipity from './img/gallery/Serendipity.png';

/* OTHER */
import tbProfile from './img/other/tb_profile.jpeg';
import theatreMasks from './img/other/theatre masks.png';

/* COMPONENTS */
import ProjectCardLeft from './components/ProjectCards';
import { ProjectCardRight } from './components/ProjectCards';
import Footer from './components/Footer';

let navImgArr = [modsUnfilled,projectUnfilled,galleryUnfilled];

function App() {
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
          <div>
            <button className='middle-nav-bttns' onClick={
              () => getNavBttnStyle(0, modsFilled, navImgArr)
            }>
              <img src={modsUnfilled} alt='Mods' className='middle-nav-imgs'></img>Mods
            </button>
            <button className='middle-nav-bttns' onClick={
              () => getNavBttnStyle(1, projectFilled, navImgArr)
            }>
              <img src={projectUnfilled} alt='Projects' className='middle-nav-imgs'></img>3D Projects
            </button>
            <button className='middle-nav-bttns' onClick={
              () => getNavBttnStyle(2, galleryFilled, navImgArr)
            }>
              <img src={galleryUnfilled} alt='gallery' className='middle-nav-imgs'></img>Gallery
            </button>
          </div>
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
        <ProjectCardLeft 
          projectTitle='THEATRE MASKS'
          projectInfo='DEBUG FOR INFO TEXT PLEASE REMOVE LATER'
          blenderImg={blenderFilled}
          photoshopImg={photoshopFilled}
          vsImg={vsUnfilled}
          premiereproImg={premiereproUnfilled}
          previewImg={theatreMasks}
        />  
        <ProjectCardRight
          projectTitle='Arcana'
          projectInfo='DEBUG FOR INFO TEXT PLEASE REMOVE LATER'
          blenderImg={blenderFilled}
          photoshopImg={photoshopUnfilled}
          vsImg={vsUnfilled}
          premiereproImg={premiereproUnfilled}
          previewImg={arcana}
        /> 
        <ProjectCardLeft
          projectTitle='Serendipity'
          projectInfo='DEBUG FOR INFO TEXT PLEASE REMOVE LATER'
          blenderImg={blenderUnfilled}
          photoshopImg={photoshopUnfilled}
          vsImg={vsUnfilled}
          premiereproImg={premiereproUnfilled}
          previewImg={serendipity}
        />
      </div>
      <Footer 
        instagramFilled={instagramFilled}
        instagramUnfilled={instagramUnfilled}
        twitterFilled={twitterFilled}
        twitterUnfilled={twitterUnfilled}
        redditFilled={redditFilled}
        redditUnfilled={redditUnfilled}
      />
    </div>
  );
}

export default App;
