export default function Footer({instagramUnfilled,twitterUnfilled,redditUnfilled}){
    return(
      <div id='footer-section' className='debug-section'>
        <div id='footer-icons-unfilled'>

          {/* INSTAGRAM */}
          <a href='https://www.instagram.com/trolledbartholomew/' target='_blank' rel='noreferrer'>
            <img id='footer-img-insta' src={instagramUnfilled} alt='instagram-unfilled'></img>
          </a>

          {/* REDDIT */}
          <a href='https://www.reddit.com/user/TrolledBartholomew/' target='_blank' rel='noreferrer'>
            <img id='footer-img-reddit' src={redditUnfilled} alt='reddit-unfilled'></img>
          </a>

          {/* TWITTER */}
          <a href='https://x.com/TrolledBartholo' target='_blank' rel='noreferrer'>
            <img id='footer-img-twitter' src={twitterUnfilled} alt='twitter-unfilled'></img>
          </a>
        </div>
      </div>
    )
}