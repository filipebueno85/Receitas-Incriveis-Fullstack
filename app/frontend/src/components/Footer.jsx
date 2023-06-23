import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../assets/drinkIcon.png';
import mealIcon from '../assets/meals.png';

function Footer() {
  return (
    <footer>
      <nav
        className="footer-container"
        style={ { position: 'fixed', bottom: '0px' } }
        data-testid="footer"
      >
        <Link to="/drinks">
          <img
            style={ { width: '55px' } }
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="drinks page"
          />
        </Link>
        <Link to="/meals">
          <img
            style={ { width: '90px' } }
            data-testid="meals-bottom-btn"
            src={ mealIcon }
            alt="meals page"
          />
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
