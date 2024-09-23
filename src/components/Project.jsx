import './Project.css';


export default function Project({ data }) {
    return (
        <div className='projects'>
            <div className='project-card'>
            <a href={data.projectUrl}>
                <img className='project-image' src={data.imgUrl} />
                </a>
                <div className='project-info'>
                    {/* <a href={data.projectUrl}> */}
                        <h3 className='project-title'>{data.title}</h3>
                    {/* </a> */}
                    <a href={data.gitUrl}>
                    <img className='git-logo' src={data.icon} />
                    </a>
                </div>
            </div>
        </div>
    );
}