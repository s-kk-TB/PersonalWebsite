
export default function ProjectCardLeft({projectTitle,blenderUnfilled,photoshopUnfileed,vsUnfilled,premiereproUnfilled,projectInfo,previewImg}){
    return(
        <div className='bottom-project-card'>
            <div className='project-card-name'>{projectTitle}</div>
            <div className='project-card-software'>
                <img src={blenderUnfilled} alt='Blender'></img>
                <img src={photoshopUnfileed} alt='Photoshop'></img>
                <img src={vsUnfilled} alt='Visual studio code'></img>
                <img src={premiereproUnfilled} alt='Premiere pro'></img>
            </div>
            <div className='project-card-info'>{projectInfo}</div>
            <div className='project-card-img'>
                <img src={previewImg} alt='preview'></img>
            </div>
            <div className='project-card-bttn'>
                <button>Learn More</button>
            </div>
        </div>
    )
}