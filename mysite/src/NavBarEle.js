
import './NavBarEle.css';
import { Link } from "react-router-dom";
function NavBarEle(props){
  return (
    <div className='NavBarEle'>
      <Link className="link" to={props.link}> {props.name} </Link>
    </div>
  );

}
export default NavBarEle ;

