
import './NavBar.css';
import NavBarEle from './NavBarEle.js';
function NavBar(){
  return (
    <div className="NavBar">
      <NavBarEle name="Home"      link="/"            />
      <NavBarEle name="Projects"  link="/projects"    />
      <NavBarEle name="CTF"       link="/CTF"    />
      <NavBarEle name="Whoami"    link="/whoami"      />
      <NavBarEle name="Contacts"  link="/contacts"   />
    </div>
  );

}

export default NavBar ;
