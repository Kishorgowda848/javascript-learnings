import {Link} from 'react-router-dom';
export const HeaderComponent = () => {
    return (
      <div className="headerContainer" >
        <img src='https://www.logodesign.net/logo-new/owl-on-scale-legal-icon-6854ld.png'></img>
        <ul className="list-items" >
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
    );
  };