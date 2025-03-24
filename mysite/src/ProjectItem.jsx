
import './ProjectItem.css';

function ProjectItem(props){
  return (
    <div className="ProjectItem">
      <div className="image-container">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="ProjectItem-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href="#">Vai al progetto</a>
      </div>
    </div>       
  
  );

}
export default ProjectItem ;

