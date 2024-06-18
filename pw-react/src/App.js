import './css/App.css';

function App() {
  return (
    <div id="main-page">
      <div id='header-section' className='debug-section'>
        <div id="header-name-section">
          <img></img><span>TrolledBartholomew</span>
        </div>
        <div id="header-skills-section">
          <span>Skills</span><img></img>
        </div>
      </div>
      <div id='top-section' className='debug-section'>
        top section
      </div>
      <div id='middle-section' className='debug-section'>
        <div className='middle-nav-section'>
          <button>Mods</button>
          <button>3D Projects</button>
          <button>Gallery</button>
        </div>
      </div>
      <div id='bottom-section' className='debug-section'>
        <div className='bottom-info-card'>
          <span>
            This section showcases 3D projects created during my free
            time that are just for posting on social media
          </span>
        </div>
      </div>
      <div id='footer-section' className='debug-section'>
        footer section
      </div>
    </div>
  );
}

export default App;
