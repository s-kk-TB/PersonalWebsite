export default function changeIcon(unfilledIconSet,filledIconSet,x,infoText){
    var count = 0;
    const infoContainer = document.getElementById('info-expand-container');
    const infoTextContainer = document.getElementById('info-text');
    const infoIcons = document.getElementsByClassName('info-icon');
    
    infoContainer.style.display = 'block';

    while(count<5){
        infoIcons[count].src = unfilledIconSet[count];
        count++;
    }

    if(x === 4){
        infoTextContainer.style.justifyContent = 'right';
    }else{
        infoTextContainer.style.justifyContent = 'left';
    }
    infoTextContainer.innerHTML = infoText;
    infoIcons[x].src = filledIconSet[x];
}