// import modsFilled from 'pw-react\src\img\filled\icons8-tools.png';
// import projectFilled from 'pw-react\src\img\filled\icons8-drawing.png';
// import galleryFilled from 'pw-react\src\img\filled\icons8-gallery.png';

export default function getNavBttnStyle(picked){

    const navBttns = document.getElementsByClassName('middle-nav-bttns');
    const navImgs = document.getElementsByClassName('middle-nav-imgs');

    for(let i=0; i<3; i++){
        navBttns[i].style.backgroundColor = '#FDFFFF';
        navBttns[i].style.color = '#010109';
        navBttns[i].style.fontFamily = 'source-sans-pro-light';
        navBttns[i].zIndex = '1';
    }
    switch(picked){
        /* MODS */
        case 0:
            navBttns[0].style.backgroundColor = '#BF2626';
            navBttns[0].style.color = '#FDFFFF';
            navBttns[0].style.fontFamily = 'source-sans-pro-black';
            navBttns[0].style.transition = '0.3s ease-in-out';
            navBttns[0].zIndex = '3';
            // navImgs[0].src = modsFilled;
            break;
        
        /* PROJECTS */
        case 1:
            navBttns[1].style.backgroundColor = '#BF2626';
            navBttns[1].style.color = '#FDFFFF';
            navBttns[1].style.fontFamily = 'source-sans-pro-black';
            navBttns[1].zIndex = '3';
            navBttns[1].style.transition = '0.3s ease-in-out';
            // navImgs[2].src = projectFilled;
            break;

        /* GALLERY */
        case 2:
            navBttns[2].style.backgroundColor = '#BF2626';
            navBttns[2].style.color = '#FDFFFF';
            navBttns[2].style.fontFamily = 'source-sans-pro-black';
            navBttns[2].zIndex = '3';
            navBttns[2].style.transition = '0.3s ease-in-out';
            // navImgs[2].src = galleryFilled;
            break;
    }
}