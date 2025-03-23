
import './Contacts.css';
import ContactItem from '../ContactItem.jsx';
import githublogo from '../assets/images/github-logo.png';
import mastodonlogo from '../assets/images/mastodon.svg';
function Contacts(){
  return (
    <div className='Contacts'>
      <ContactItem href="https://mastodon.uno/@tommasodisalle" src={mastodonlogo} alt="mastodon logo"/>
      <ContactItem href="https://github.com/h00k86" src={githublogo} alt="github logo"/>
    </div>
  );

}
export default Contacts ;

