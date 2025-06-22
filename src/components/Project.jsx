import './Project.css';


export default function Project({ data }) {
    return (
        <div className='projects'>
            <div className='project-card'>
            <a href={data.projectUrl} target='_blank'>
                <img className='project-image' src={data.imgUrl} />
                </a>
                <div className='project-info'>
                    <a href={data.projectUrl} target='_blank'>
                        <h3 className='project-title'>{data.title}</h3>
                    </a>
                    <a href={data.gitUrl} target='_blank'>
                    <img className='git-logo' src={data.icon} />
                    </a>
                </div>
            </div>
        </div>
    );
}