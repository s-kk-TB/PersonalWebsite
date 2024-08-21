/* ICONS FILLED*/
import blenderFilled from '../img/filled/icons8-blender.png';
import photoshopFilled from '../img/filled/icons8-photoshop.png';
import vsFilled from '../img/filled/icons8-visual-studio.png';
import premiereproFilled from '../img/filled/icons8-adobe-premiere-pro.png';
import infoFilled from '../img/filled/icons8-info.png';

/* ICONS UNFILLED */
import blenderUnfilled from '../img/unfilled/icons8-blender.png';
import photoshopUnfilled from '../img/unfilled/icons8-photoshop.png';
import vsUnfilled from '../img/unfilled/icons8-visual-studio.png';
import premiereproUnfilled from '../img/unfilled/icons8-adobe-premiere-pro.png';
import infoUnfilled from '../img/unfilled/icons8-info.png';

/* FUNCTIONALITY */
import changeIcon from '../js/ProjectFunc';

/* ICON ARRAYS */
const unfilledIconSet = [blenderUnfilled,photoshopUnfilled,premiereproUnfilled,vsUnfilled,infoUnfilled];
const filledIconSet = [blenderFilled,photoshopFilled,premiereproFilled,vsFilled,infoFilled];

export default function ViewportInfoCards(){
    return(
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
          <button onClick={
            () => changeIcon(unfilledIconSet,filledIconSet,4, 'Bye from the info panel')
          }>
            <img className='info-icon' src={infoUnfilled} alt='info'></img>
          </button>
        </div>
    </div>
    )
}