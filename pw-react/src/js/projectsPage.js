export default function getNavBttnStyle(picked,img,imgDefault){

    const navBttns = document.getElementsByClassName('middle-nav-bttns');
    const navImgs = document.getElementsByClassName('middle-nav-imgs');

    for(let i=0; i<3; i++){
        navBttns[i].style.backgroundColor = '#FDFFFF';
        navBttns[i].style.color = '#010109';
        navBttns[i].style.fontFamily = 'source-sans-pro-light';
        navBttns[i].zIndex = '1';
        navImgs[i].src = imgDefault[i];
    }
    switch(picked){
        /* MODS */
        case 0:
            navBttns[0].style.backgroundColor = '#400207';
            navBttns[0].style.color = '#FDFFFF';
            navBttns[0].style.fontFamily = 'source-sans-pro-black';
            navBttns[0].style.transition = '0.25s ease-in-out';
            navImgs[0].src = img;
            navBttns[0].zIndex = '999';
            // navImgs[0].src = modsFilled;
            break;
        
        /* PROJECTS */
        case 1:
            navBttns[1].style.backgroundColor = '#400207';
            navBttns[1].style.color = '#FDFFFF';
            navBttns[1].style.fontFamily = 'source-sans-pro-black';
            navBttns[1].zIndex = '999';
            navImgs[1].src = img;
            navBttns[1].style.transition = '0.25s ease-in-out';
            // navImgs[2].src = projectFilled;
            break;

        /* GALLERY */
        case 2:
            navBttns[2].style.backgroundColor = '#400207';
            navBttns[2].style.color = '#FDFFFF';
            navBttns[2].style.fontFamily = 'source-sans-pro-black';
            navBttns[2].zIndex = '999';
            navImgs[2].src = img;
            navBttns[2].style.transition = '0.25s ease-in-out';
            // navImgs[2].src = galleryFilled;
            break;
    }
}