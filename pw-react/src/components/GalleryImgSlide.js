import DisplayImgHighlight from '../js/GalleryFunctionality';

export default function GalleryImgSlide({ GalleryImg, AltText }){
    return(
        <button onClick={
            () => DisplayImgHighlight(GalleryImg)
          }>
            <img src={GalleryImg} alt={AltText}></img>
        </button>
    );
}