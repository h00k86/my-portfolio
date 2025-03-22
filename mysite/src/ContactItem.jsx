
import './ContactItem.css';

function ContactItem(props){
  return (
    <div className='ContactItem'>
      <img src={props.src} alt={props.alt}/> 
    </div>
  );

}
export default ContactItem ;

