
import './ContactItem.css';

function ContactItem(props){
  return (
    <div className='ContactItem'>
      <a href={props.href}>
      <img className="img-contact" src={props.src} alt={props.alt}/> 
      </a>
    </div>
  );

}
export default ContactItem ;

