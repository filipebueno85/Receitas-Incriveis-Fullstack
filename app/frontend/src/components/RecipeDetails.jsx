import copy from 'clipboard-copy';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import blackHeart from '../assets/favoriteIcon.png';
import shareIcon from '../assets/share.png';
import whiteHeart from '../assets/unfavoriteIcon.png';
import myContext from '../context/myContext';

function RecipeDetails() {
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(false);
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [arrayMensure, setArrayMensure] = useState([]);
  const {
    resultSearch,
    setFavoriteRecipes,
    favoriteRecipes,
    favoriteBtn,
    setFavoriteBtn,
  } = useContext(myContext);

  const arrayIngredientMensure = () => {
    const objresultIngredient = Object.entries(resultSearch)
      .filter((result) => result[0].includes('strIngredient') && result[1] !== null && result[1] !== '')
      .map((result) => result[1]);
    setArrayIngredients(objresultIngredient);
    const objresultMensure = Object.entries(resultSearch)
      .filter((result) => result[0].includes('strMeasure') && result[1] !== null && result[1] !== '')
      .map((result) => result[1]);
    setArrayMensure(objresultMensure);
  };

  const handleClickShare = () => {
    copy(`http://aplicativo-de-receitas-18.vercel.app${pathname}`);
    setCopied(true);
  };

  const handleClickFavorite = () => {
    const favorite = {
      id: resultSearch.idDrink || resultSearch.idMeal,
      type: resultSearch.idDrink ? 'drink' : 'meal',
      nationality: resultSearch.strArea || '',
      category: resultSearch.strCategory || '',
      alcoholicOrNot: resultSearch.strAlcoholic || '',
      name: resultSearch.strDrink || resultSearch.strMeal,
      image: resultSearch.strDrinkThumb || resultSearch.strMealThumb,
    };

    if (favoriteBtn) {
      const filteredFavorites = favoriteRecipes.filter(
        (favoriteRecipe) => Number(favoriteRecipe.id) !== Number(favorite.id)
      );
      setFavoriteRecipes(filteredFavorites);
    } else {
      setFavoriteRecipes([...favoriteRecipes, favorite]);
    }
  };

  useEffect(() => {
    arrayIngredientMensure();
  }, []);

  useEffect(() => {
    const favoriteValue = favoriteRecipes.some(
      (recipe) =>
        Number(recipe.id) === Number(resultSearch.idDrink) ||
        Number(recipe.id) === Number(resultSearch.idMeal)
    );
    setFavoriteBtn(favoriteValue);
  }, [favoriteRecipes, resultSearch.idDrink, resultSearch.idMeal]);

  return (
    <div className="details-container">
      <div className="header-recipe">
        <h1 data-testid="recipe-title">{resultSearch.strDrink || resultSearch.strMeal}</h1>
        <img
          style={{ width: '300px' }}
          data-testid="recipe-photo"
          src={resultSearch.strDrinkThumb || resultSearch.strMealThumb}
          alt={resultSearch.strDrink || resultSearch.strMeal}
        />
      </div>
      <h1 className="detail-category" data-testid="recipe-category">
        {resultSearch.strAlcoholic || resultSearch.strCategory}
      </h1>
      <h1 className="detail-category">Ingredients</h1>
      <div className="ingredients-list">
        {arrayIngredients.map((ingredient, index) => (
          <ul data-testid={`${index}-ingredient-name-and-measure`} key={index}>
            <li>{`${ingredient} - ${arrayMensure[index] || ''}`}</li>
          </ul>
        ))}
      </div>
      <div>
        <h1 className="detail-category">Instructions</h1>
        <p className="text-details" data-testid="instructions">
          {resultSearch.strInstructions}
        </p>
      </div>
      <div className="video-container">
        {resultSearch.strMeal && (
          <iframe
            title={resultSearch.strMeal}
            width="360"
            height="270"
            data-testid="video"
            src={resultSearch.strYoutube.replace('watch?v=', 'embed/')}
          />
        )}
      </div>
      <div>
        <div className="details-buttons">
          <button
            className="share-button"
            data-testid="share-btn"
            onClick={handleClickShare}
          >
            <img src={shareIcon} alt="share icon" />
          </button>
          {copied && <span>Link copied!</span>}
          <input
            type="image"
            style={{ width: '50px' }}
            src={favoriteBtn ? blackHeart : whiteHeart}
            alt={favoriteBtn ? 'favorited-heart' : 'unfavorited-heart'}
            data-testid="favorite-btn"
            onClick={handleClickFavorite}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;

// import copy from 'clipboard-copy';
// import { useContext, useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import blackHeart from '../assets/favoriteIcon.png';
// import shareIcon from '../assets/share.png';
// import whiteHeart from '../assets/unfavoriteIcon.png';
// import myContext from '../context/myContext';

// function RecipeDetails() {
//   const { pathname } = useLocation();
//   const [copied, setCopied] = useState(false);
//   const [arrayIngredients, setArrayIngredients] = useState([]);
//   const [arrayMensure, setArrayMensure] = useState([]);
//   const {
//     resultSearch,
//     setFavoriteRecipes,
//     favoriteRecipes,
//     favoriteBtn,
//     setFavoriteBtn,
//   } = useContext(myContext);

//   const arrayIngredientMensure = () => {
//     const objresultIngredient = Object.entries(resultSearch)
//       .filter((result) => result[0]
//         .includes('strIngredient') && result[1] !== null && result[1] !== '')
//       .map((result) => result[1]);
//     setArrayIngredients(objresultIngredient);
//     const objresultMensure = Object.entries(resultSearch)
//       .filter((result) => result[0]
//         .includes('strMeasure') && result[1] !== null && result[1] !== '')
//       .map((result) => result[1]);
//     setArrayMensure(objresultMensure);
//   };

//   const handleClickShare = () => {
//     copy(`http://aplicativo-de-receitas-18.vercel.app${pathname}`);
//     setCopied(true);
//   };

//   // const handleClickFavorite = () => {
//   //   if (resultSearch && resultSearch.idDrink) {
//   //     const favorite = {
//   //       id: resultSearch.idDrink,
//   //       type: 'drink',
//   //       nationality: resultSearch.strArea || '',
//   //       category: resultSearch.strCategory || '',
//   //       alcoholicOrNot: resultSearch.strAlcoholic || '',
//   //       name: resultSearch.strDrink || '',
//   //       image: resultSearch.strDrinkThumb || '',
//   //     };

//   //     if (favoriteBtn) {
//   //       if (favoriteRecipes.length !== 0) {
//   //         const filteredFavorites = favoriteRecipes.filter(
//   //           (favoriteRecipe) => Number(favoriteRecipe.id) !== Number(resultSearch.idDrink),
//   //         );
//   //         setFavoriteRecipes(filteredFavorites);
//   //       }
//   //     } else {
//   //       setFavoriteRecipes([...favoriteRecipes, favorite]);
//   //     }
//   //   }
//   // };

//   const handleClickFavorite = () => {
//     const favorite = {
//       id: resultSearch.idDrink || resultSearch.idMeal,
//       type: resultSearch.idDrink ? 'drink' : 'meal',
//       nationality: resultSearch.strArea || '',
//       category: resultSearch.strCategory || '',
//       alcoholicOrNot: resultSearch.strAlcoholic || '',
//       name: resultSearch.strDrink || resultSearch.strMeal,
//       image: resultSearch.strDrinkThumb || resultSearch.strMealThumb,
//     };
//     if (favoriteBtn) {
//       if (favoriteRecipes.length !== 0) {
//         const teste = favoriteRecipes.filter((favoriteRecipe) => (
//           Number(favoriteRecipe.id) !== Number(resultSearch.idDrink)
//           && Number(favoriteRecipe.id) !== Number(resultSearch.idMeal)));
//         // console.log(favoriteBtn);
//         setFavoriteRecipes(teste);
//       }
//     } else {
//       setFavoriteRecipes([...favoriteRecipes, favorite]);
//     }
//   };

//   useEffect(() => {
//     const favoriteValue = favoriteRecipes.some((recipe) => Number(recipe
//       .id) === Number(resultSearch.idDrink) || Number(recipe
//       .id) === Number(resultSearch.idMeal));
//     setFavoriteBtn(favoriteValue);
//     arrayIngredientMensure();
//   }, [favoriteRecipes, resultSearch.idDrink, resultSearch.idMeal, setFavoriteBtn]);

//   return (
//     <div className="details-container">
//       <div className="header-recipe">
//         <h1
//           data-testid="recipe-title"
//         >
//           {resultSearch.strDrink || resultSearch.strMeal }
//         </h1>
//         <img
//           style={ { width: '300px' } }
//           data-testid="recipe-photo"
//           src={ resultSearch.strDrinkThumb || resultSearch.strMealThumb }
//           alt={ resultSearch.strDrink || resultSearch.strMeal }
//         />
//       </div>
//       <h1 className="detail-category" data-testid="recipe-category">
//         {resultSearch.strAlcoholic || resultSearch.strCategory }
//       </h1>
//       <h1 className="detail-category">Ingredients</h1>
//       <div className="ingredients-list">
//         {arrayIngredients
//           .map((ingredient, index) => (
//             <ul
//               data-testid={ `${index}-ingredient-name-and-measure` }
//               key={ index }
//             >
//               <li>
//                 {`${ingredient} - ${arrayMensure[index] || ''}`}
//               </li>
//             </ul>
//           ))}
//       </div>
//       <div>
//         <h1 className="detail-category">Instructions</h1>
//         <p
//           className="text-details"
//           data-testid="instructions"
//         >
//           {resultSearch.strInstructions}

//         </p>
//       </div>
//       <div className="video-container">
//         {resultSearch.strMeal
//         && <iframe
//           title={ resultSearch.strMeal }
//           width="360"
//           height="270"
//           data-testid="video"
//           src={ resultSearch.strYoutube.replace('watch?v=', 'embed/') }
//         />}
//       </div>
//       <div>
//         <div className="details-buttons">
//           <button
//             className="share-button"
//             data-testid="share-btn"
//             onClick={ handleClickShare }
//           >
//             <img src={ shareIcon } alt="share icon" />
//           </button>
//           { copied && <span>Link copied!</span> }
//           <input
//             type="image"
//             style={ { width: '50px' } }
//             src={ favoriteBtn
//               ? blackHeart
//               : whiteHeart }
//             alt={ favoriteBtn
//               ? 'favorited-heart'
//               : 'unfavorited-heart' }
//             data-testid="favorite-btn"
//             onClick={ handleClickFavorite }
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeDetails;
