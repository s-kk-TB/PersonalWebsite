
export default function ProjectCardLeft({projectTitle,blenderImg,photoshopImg,vsImg,premiereproImg,projectInfo,previewImg}){
    return(
        <div className='bottom-project-card-left'>
            <div className='project-card-name-left'>{projectTitle}</div>
            <div className='project-card-software-left'>
                <img src={blenderImg} alt='Blender'></img>
                <img src={photoshopImg} alt='Photoshop'></img>
                <img src={vsImg} alt='Visual studio code'></img>
                <img src={premiereproImg} alt='Premiere pro'></img>
            </div>
            <div className='project-card-info-left'>{projectInfo}</div>
            <div className='project-card-img-left'>
                <img src={previewImg} alt='preview'></img>
            </div>
            <div className='project-card-bttn-left'>
                <button onClick={
                    () => window.location.href = "/Project"
                }>
                    Learn More
                </button>
            </div>
        </div>
    )
}