export default function getNavBttnStyle(selected){
    
    alert("Changing nav colors")
    const navBttns = document.getElementsByClassName('middle-nav-bttns');
    const navImgs = document.getElementsByClassName('middle-nav-imgs');

    for(let i=0; i<3; i++){
        navBttns[i].style.backgroundColor = '#FDFFFF';
    }
    switch(selected){
        case 0:
            navBttns[0].style.backgroundColor = '#BF2626';
            break;
        case 1:
            navBttns[1].style.backgroundColor = '#BF2626';
            break;
        case 2:
            navBttns[2].style.backgroundColor = '#BF2626';
            break;
    }
}