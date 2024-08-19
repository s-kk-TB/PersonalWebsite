import tbProfile from '../img/other/tb_profile.jpeg';

export default function Header(){
    return(
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
    )
}