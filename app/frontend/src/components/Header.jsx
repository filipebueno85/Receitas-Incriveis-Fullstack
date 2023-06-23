import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import foodIcon from '../assets/foodIcon.png';
import myContext from '../context/myContext';

import imageProfile from '../assets/profileIcon.png';
import searchImage from '../assets/searchIcon.png';
import SearchBar from './SearchBar';

function Header({ title, searchIconDisabled = true }) {
  const {
    searchIcon,
    setSearchIcon,
    searchInput,
    setSearchInput,
  } = useContext(myContext);

  useEffect(() => {
    setSearchIcon(searchIconDisabled);
  }, [searchIconDisabled, setSearchIcon]);

  return (
    <header>
      <div className="header-profile">
        <img style={ { width: '40px' } } src={ foodIcon } alt="" />
        <h1>App de Receitas</h1>
        <Link to="/profile">
          <button type="button">
            <img
              style={ { width: '50px' } }
              data-testid="profile-top-btn"
              src={ imageProfile }
              alt="profile"
            />
          </button>
        </Link>
      </div>
      { searchIcon
        && (
          <button
            className="search-button"
            type="button"
            onClick={ () => setSearchInput(!searchInput) }
          >
            <img
              style={ { width: '60px' } }
              data-testid="search-top-btn"
              src={ searchImage }
              alt="search"
            />
          </button>
        )}
      { searchInput
         && <SearchBar /> }
      <h1 className="header-title" data-testid="page-title">{ title }</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchIconDisabled: PropTypes.bool,
};

export default Header;
