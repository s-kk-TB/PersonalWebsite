import { Link } from 'react-router-dom';

import getNavBttnStyle from '../js/projectsPage';

/* FILLED ICONS */
import modsFilled from '../img/filled/icons8-tools.png';
import projectFilled from '../img/filled/icons8-drawing.png';
import galleryFilled from '../img/filled/icons8-gallery.png';

/* UNFILLED ICONS */
import modsUnfilled from '../img/unfilled/icons8-tools.png';
import projectUnfilled from '../img/unfilled/icons8-drawing.png';
import galleryUnfilled from '../img/unfilled/icons8-gallery.png';

let navImgArr = [modsUnfilled,projectUnfilled,galleryUnfilled];

export default function Navbar(){
    return(
        <div>
            <Link to="/Mods">
            <button className='middle-nav-bttns'>
                <img src={modsUnfilled} alt='Mods' className='middle-nav-imgs'></img>Mods
            </button>
            </Link>
            <Link to="/">
                <button className='middle-nav-bttns'>
                    <img src={projectUnfilled} alt='Projects' className='middle-nav-imgs'></img>3D Projects
                </button>
            </Link>
            <Link to="/Gallery">
                <button className='middle-nav-bttns'>
                    <img src={galleryUnfilled} alt='gallery' className='middle-nav-imgs'></img>Gallery
                </button>
            </Link>
        </div>
    )
}