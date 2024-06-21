import './css/App.css';
import getNavBttnStyle from './js/projectsPage';

/* ICONS FILLED*/
import instagramFilled from './img/filled/icons8-instagram.png';
import redditFilled from './img/filled/icons8-reddit.png';
import twitterFilled from './img/filled/icons8-twitter.png';
import modsFilled from './img/filled/icons8-tools.png';
import projectFilled from './img/filled/icons8-drawing.png';
import galleryFilled from './img/filled/icons8-gallery.png';


/* ICONS UNFILLED */
import dwnArrowUnfilled from './img/unfilled/icons8-arrow.png';
import modsUnfilled from './img/unfilled/icons8-tools.png';
import projectUnfilled from './img/unfilled/icons8-drawing.png';
import galleryUnfilled from './img/unfilled/icons8-gallery.png';
import instagramUnfilled from './img/unfilled/icons8-instagram.png';
import redditUnfilled from './img/unfilled/icons8-reddit.png';
import twitterUnfilled from './img/unfilled/icons8-twitter.png';
import blenderUnfilled from './img/unfilled/icons8-blender-100.png';
import photoshopUnfileed from './img/unfilled/icons8-photoshop-100.png';
import vsUnfilled from './img/unfilled/icons8-visual-studio-100.png';
import premiereproUnfilled from './img/unfilled/icons8-adobe-premiere-pro-100.png';

/* GALLERY */
import terminus from './img/gallery/Terminus.png';

/* OTHER */
import tbProfile from './img/other/tb_profile.jpeg';
import theatreMasks from './img/other/theatre masks.png';

let navImgArr = [modsUnfilled,projectUnfilled,galleryUnfilled];

function App() {
  return (
    <div id="main-page">
      <div id='header-section' className='debug-section'>
        <div id="header-name-section">
          <img src={tbProfile} alt='Profile icon'></img><span>TrolledBartholomew</span>
        </div>
        <div id="header-skills-section">
          <span>Skills</span><img src={dwnArrowUnfilled} alt='Down Arrow'></img>
        </div>
      </div>
      <div id='top-section' className='debug-section'>
        <div id='top-title-section'>
          <span id='top-title-text'>Welcome to my Showcase</span><br></br>
          <span id='top-title-info'>Personal 3D works, mods & more</span>
        </div>
        <img src={terminus} alt='terminus'></img>
      </div>
      <div id='middle-section' className='debug-section'>
        <div className='middle-nav-section'>
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
      <div id='bottom-section' className='debug-section'>
        <div className='bottom-info-block'>
          <div className='bottom-info-card'>
            <div>
              This section showcases 3D projects created during my free
              time that are just for posting on social media.
            </div>
          </div>
        </div>
        <div className='bottom-project-card'>
          <div className='project-card-name'>PROJECT NAME</div>
          <div className='project-card-software'>
            <img src={blenderUnfilled} alt='Blender'></img>
            <img src={photoshopUnfileed} alt='Photoshop'></img>
            <img src={vsUnfilled} alt='Visual studio code'></img>
            <img src={premiereproUnfilled} alt='Premiere pro'></img>
          </div>
          <div className='project-card-info'>INFO HERE</div>
          <div className='project-card-img'>
            <img src={theatreMasks} alt='preview'></img>
          </div>
          <div className='project-card-bttn'>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div id='footer-section' className='debug-section'>
        <div id='footer-icons-filled'>
          <a href='https://www.instagram.com/trolledbartholomew/' target='_blank' rel='noreferrer'>
            <img src={instagramFilled} alt='instagram-filled'></img>
          </a>
          <a href='https://www.reddit.com/user/TrolledBartholomew/' target='_blank' rel='noreferrer'>
            <img src={redditFilled} alt='reddit-filled'></img>
          </a>
          <a href='https://x.com/TrolledBartholo' target='_blank' rel='noreferrer'>
            <img src={twitterFilled} alt='twitter-filled'></img>
          </a>
        </div>
        <div id='footer-icons-unfilled'>
          <a href='https://www.instagram.com/trolledbartholomew/' target='_blank' rel='noreferrer'>
            <img src={instagramUnfilled} alt='instagram-unfilled'></img>
          </a>
          <a href='https://www.reddit.com/user/TrolledBartholomew/' target='_blank' rel='noreferrer'>
            <img src={redditUnfilled} alt='reddit-unfilled'></img>
          </a>
          <a href='https://x.com/TrolledBartholo' target='_blank' rel='noreferrer'>
            <img src={twitterUnfilled} alt='twitter-unfilled'></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;