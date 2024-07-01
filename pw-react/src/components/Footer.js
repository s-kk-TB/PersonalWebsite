export default function Footer({instagramFilled,instagramUnfilled,twitterFilled,twitterUnfilled,redditFilled,redditUnfilled}){
    return(
        <div id='footer-section' className='debug-section'>
        <div id='footer-icons-filled'>
          <a href='https://www.instagram.com/trolledbartholomew/' target='_blank' rel='noreferrer'>
            <img src={instagramFilled} alt='instagram-filled'></img>
          </a>
          <a href='https://www.reddit.com/user/TrolledBartholomew/' target='_blank' rel='noreferrer'>
            <img src={redditFilled} alt='reddit-filled'></img>
          </a>
          <a href='https://x.com/TrolledBartholo' target='_blank' rel='noreferrer'>
            <img src={twitterFilled} alt='twitter-filled'></img>
          </a>
        </div>
        <div id='footer-icons-unfilled'>
          <a href='https://www.instagram.com/trolledbartholomew/' target='_blank' rel='noreferrer'>
            <img src={instagramUnfilled} alt='instagram-unfilled'></img>
          </a>
          <a href='https://www.reddit.com/user/TrolledBartholomew/' target='_blank' rel='noreferrer'>
            <img src={redditUnfilled} alt='reddit-unfilled'></img>
          </a>
          <a href='https://x.com/TrolledBartholo' target='_blank' rel='noreferrer'>
            <img src={twitterUnfilled} alt='twitter-unfilled'></img>
          </a>
        </div>
      </div>
    )
}