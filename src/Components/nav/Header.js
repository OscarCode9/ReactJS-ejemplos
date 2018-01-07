import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <header>
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container"><a id="logo-container" href="/" class="brand-logo">
        <img
          width={200}
          height={50}
          src="https://vignette.wikia.nocookie.net/es.pokemon/images/6/61/Logo_de_Pok%C3%A9mon_%28EN%29.png/revision/latest/scale-to-width-down/640?cb=20160319183155"
          alt="" />
      </a>
        <ul class="right hide-on-med-and-down">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/roster'>Roster</Link></li>
          <li><Link to='/schedule'>Schedule</Link></li>
          <li><Link to='/favoritos'>Favoritos</Link></li>
        </ul>

        <ul id="nav-mobile" class="side-nav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/roster'>Roster</Link></li>
          <li><Link to='/schedule'>Schedule</Link></li>
          <li><Link to='/favoritos'>Favoritos</Link></li>
        </ul>
        <a href="/" data-activates="nav-mobile" class="button-collapse"><i class="fa fa-bars" aria-hidden="true"></i>
        </a>
      </div>
    </nav>



  </header>
)
export default Header;

