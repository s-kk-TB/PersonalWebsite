
export default function ProjectCardLeft({projectTitle,blenderUnfilled,photoshopUnfileed,vsUnfilled,premiereproUnfilled,projectInfo,previewImg}){
    return(
        <div className='bottom-project-card-left'>
            <div className='project-card-name-left'>{projectTitle}</div>
            <div className='project-card-software-left'>
                <img src={blenderUnfilled} alt='Blender'></img>
                <img src={photoshopUnfileed} alt='Photoshop'></img>
                <img src={vsUnfilled} alt='Visual studio code'></img>
                <img src={premiereproUnfilled} alt='Premiere pro'></img>
            </div>
            <div className='project-card-info-left'>{projectInfo}</div>
            <div className='project-card-img-left'>
                <img src={previewImg} alt='preview'></img>
            </div>
            <div className='project-card-bttn-left'>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export function ProjectCardRight({projectTitle,blenderUnfilled,photoshopUnfileed,vsUnfilled,premiereproUnfilled,projectInfo,previewImg}){
    return(
        <div className='bottom-project-card-right'>
            <div className='project-card-img-right'>
                <img src={previewImg} alt='preview'></img>
            </div>
            <div className='project-card-bttn-right'>
                <button>Learn More</button>
            </div>
            <div className='project-card-name-right'>{projectTitle}</div>
            <div className='project-card-software-right'>
                <img src={blenderUnfilled} alt='Blender'></img>
                <img src={photoshopUnfileed} alt='Photoshop'></img>
                <img src={vsUnfilled} alt='Visual studio code'></img>
                <img src={premiereproUnfilled} alt='Premiere pro'></img>
            </div>
            <div className='project-card-info-right'>{projectInfo}</div>
        </div>
    )
}