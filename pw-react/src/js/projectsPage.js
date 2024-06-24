export default function getNavBttnStyle(picked,img,imgDefault){

    const navBttns = document.getElementsByClassName('middle-nav-bttns');
    const navImgs = document.getElementsByClassName('middle-nav-imgs');

    function updateNavBttn(x){
        navBttns[x].style.backgroundColor = '#400207';
        navBttns[x].style.color = '#FDFFFF';
        navBttns[x].style.fontFamily = 'source-sans-pro-black';
        navBttns[x].style.zIndex = '2';
        navImgs[x].src = img;
        navImgs[x].style.transition = '0.2s ease-in-out';
        navBttns[x].style.transition = '0.2s ease-in-out';
    }

    for(let i=0; i<3; i++){
        navBttns[i].style.backgroundColor = '#FDFFFF';
        navBttns[i].style.color = '#010109';
        navBttns[i].style.fontFamily = 'source-sans-pro-light';
        navBttns[i].style.zIndex = '0';
        navImgs[i].src = imgDefault[i];
    }
    switch(picked){
        /* MODS */
        case 0:
            updateNavBttn(0);
            break;
        
        /* PROJECTS */
        case 1:
            updateNavBttn(1);
            break;

        /* GALLERY */
        case 2:
            updateNavBttn(2);
            break;
    }
}