export default function changeIcon(unfilledIconSet,filledIconSet,x){
    var count = 0;
    const infoIcons = document.getElementsByClassName('info-icon');
    
    while(count<4){
        infoIcons[count].src = unfilledIconSet[count];
        count++;
    }
    infoIcons[x].src = filledIconSet[x];
}