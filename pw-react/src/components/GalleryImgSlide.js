import DisplayImgHighlight from '../js/Gallery';

export default function GalleryImgSlide({ GalleryImg, AltText }){
    return(
        <button onClick={
            () => DisplayImgHighlight(GalleryImg)
          }>
            <img src={GalleryImg} alt={AltText}></img>
          </button>
    );
}