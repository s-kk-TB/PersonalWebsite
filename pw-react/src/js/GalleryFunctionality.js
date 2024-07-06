export default function DisplayImgHighlight(GalleryImg){
    const GalleryImgContainer = document.getElementById('gallery-img-highlight');
    const GImg = document.getElementById('gallery-img');
    GalleryImgContainer.style.display = 'flex';
    GImg.src = GalleryImg;
}

export function CloseImgHighlight(){
    const GalleryImgContainer = document.getElementById('gallery-img-highlight');
    GalleryImgContainer.style.display = 'none';
}