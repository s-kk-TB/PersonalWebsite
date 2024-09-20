
export default function ProjectCard({projectTitle,blenderImg,photoshopImg,vsImg,premiereproImg,previewImg}){
    return(
        <div className='bottom-project-card'>
            <div className="project-card-title">
                <div>
                    {projectTitle}
                </div>
            </div>
            <div className="project-preview-img">
                <img src={previewImg} alt="preview"></img>
            </div>
            <div className="project-card-info">
                <div className="project-card-software">
                    <img src={blenderImg} alt="blender"></img>
                    <img src={photoshopImg} alt="photoshop"></img>
                    <img src={vsImg} alt="vs code"></img>
                    <img src={premiereproImg} alt="premiere pro"></img>
                </div>
                <div className="project-card-bttn">
                    <button onClick={
                        () => window.location.href = "/Project"
                    }>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}