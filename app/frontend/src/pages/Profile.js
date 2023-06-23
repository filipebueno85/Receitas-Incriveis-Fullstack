import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const [userEmail] = useState(
    localStorage
      .getItem('user') ? JSON.parse(localStorage.getItem('user')) : { email: '' },
  );
  const history = useHistory();

  const handleClick = (location = '') => {
    history.push(`/${location}`);
  };

  return (
    <div>
      <Header title="Profile" searchIconDisabled={ false } />
      <div className="profile-container">
        <div>
          <h3 data-testid="profile-email">{userEmail}</h3>
        </div>
        <div className="profile-buttons">
          <button
            data-testid="profile-done-btn"
            type="button"
            onClick={ () => handleClick('done-recipes') }
          >
            Done Recipes
          </button>
          <button
            data-testid="profile-favorite-btn"
            type="button"
            onClick={ () => handleClick('favorite-recipes') }
          >
            Favorite Recipes
          </button>
          <button
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => {
              localStorage.removeItem('user');
              localStorage.removeItem('mealsToken');
              localStorage.removeItem('cocktailsToken');
              localStorage.removeItem('drinksToken');
              localStorage.removeItem('token');
              localStorage.removeItem('doneRecipes');
              localStorage.removeItem('favoriteRecipes');
              localStorage.removeItem('inProgressRecipes');
              handleClick();
            } }
          >
            Logout
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import Footer from '../components/Footer';
// import Header from '../components/Header';

// function Profile() {
//   const [userEmail] = useState(localStorage.getItem('user')
//     ? JSON.parse(localStorage.getItem('user')) : { email: '' });
//   const history = useHistory();

//   const handleClick = (location = '') => {
//     history.push(`/${location}`);
//   };

//   return (
//     <div>
//       <Header title="Profile" searchIconDisabled={ false } />
//       <div className="profile-container">
//         <div>
//           <h3 data-testid="profile-email">
//             { userEmail.email }
//           </h3>
//         </div>
//         <div className="profile-buttons">
//           <button
//             data-testid="profile-done-btn"
//             type="button"
//             onClick={ () => handleClick('done-recipes') }
//           >
//             Done Recipes
//           </button>
//           <button
//             data-testid="profile-favorite-btn"
//             type="button"
//             onClick={ () => handleClick('favorite-recipes') }
//           >
//             Favorite Recipes
//           </button>
//           <button
//             data-testid="profile-logout-btn"
//             type="button"
//             onClick={ () => {
//               localStorage.removeItem('user');
//               localStorage.removeItem('mealsToken');
//               localStorage.removeItem('cocktailsToken');
//               localStorage.removeItem('drinksToken');
//               localStorage.removeItem('token');
//               localStorage.removeItem('doneRecipes');
//               localStorage.removeItem('favoriteRecipes');
//               localStorage.removeItem('inProgressRecipes');
//               handleClick();
//             } }
//           >
//             Logout
//           </button>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Profile;
