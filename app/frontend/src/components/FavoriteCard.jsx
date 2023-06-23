import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import blackHeart from '../assets/favoriteIcon.png';
import shareIcon from '../assets/share.png';
import myContext from '../context/myContext';

function FavoriteCard({ recipe, index }) {
  const { image, name, category, nationality, alcoholicOrNot, type, id } = recipe;
  const {
    setFavoriteRecipes,
    favoriteRecipes,
  } = useContext(myContext);

  const [copied, setCopied] = useState(false);

  const handleClickShare = () => {
    copy(`http://aplicativo-de-receitas-18.vercel.app/${type}s/${id}`);
    setCopied(true);
  };

  const handleClickFavorite = () => {
    const teste = favoriteRecipes.filter((favoriteRecipe) => (
      Number(favoriteRecipe.id) !== Number(id)));
    setFavoriteRecipes(teste);
  };

  return (
    <div className="favorite-cards">
      <Link to={ `/${type}s/${id}` }>
        <div>
          <img
            width="150px"
            className="fav-card-img"
            src={ image }
            alt={ `Foto de um(a) ${name}` }
            data-testid={ `${index}-horizontal-image` }
          />
          <p data-testid={ `${index}-horizontal-name` }>{name}</p>
        </div>
      </Link>

      { alcoholicOrNot
        ? (
          <p data-testid={ `${index}-horizontal-top-text` }>
            {alcoholicOrNot}
          </p>)
        : (
          <p data-testid={ `${index}-horizontal-top-text` }>
            {`${nationality} - ${category}`}
          </p>
        )}
      <div className="details-buttons">
        <button
          onClick={ handleClickShare }
        >
          <img
            style={ { width: '50px' } }
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="share icon"
          />
        </button>
        { copied && <span>Link copied!</span> }

        <input
          type="image"
          style={ { width: '50px' } }
          src={ blackHeart }
          alt="unfavorited-heart"
          data-testid={ `${index}-horizontal-favorite-btn` }
          onClick={ handleClickFavorite }
        />
      </div>
      {/* <ShareButton type={ `${type}s` } id={ id } index={ index } /> */}
    </div>
  );
}

FavoriteCard.propTypes = {
  recipe: PropTypes.shape({
    alcoholicOrNot: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default FavoriteCard;
