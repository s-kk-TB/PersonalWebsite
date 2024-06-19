import './css/App.css';
import instagramFilled from './img/filled/icons8-instagram.png';
import redditFilled from './img/filled/icons8-reddit.png';
import twitterFilled from './img/filled/icons8-twitter.png';
import dwnArrowUnfilled from './img/unfilled/icons8-arrow.png';
import tbProfile from './img/other/tb_profile.jpeg';
import terminus from './img/gallery/Terminus.png';

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
          <button>Mods</button>
          <button>3D Projects</button>
          <button>Gallery</button>
        </div>
      </div>
      <div id='bottom-section' className='debug-section'>
        <div className='bottom-info-block'>
          <div className='bottom-info-card'>
            <span>
              This section showcases 3D projects created during my free
              time that are just for posting on social media
            </span>
          </div>
        </div>
      </div>
      <div id='footer-section' className='debug-section'>
        <div>
          <img src={instagramFilled} alt='instagram-filled'></img>
          <img src={redditFilled} alt='reddit-filled'></img>
          <img src={twitterFilled} alt='twitter-filled'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
