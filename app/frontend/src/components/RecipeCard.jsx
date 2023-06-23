import { useContext, useEffect } from 'react';
// import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import myContext from '../context/myContext';

const seis = 6;

function RecipeCard() {
  const { carouselResults, carouselMealsApi } = useContext(myContext);

  useEffect(() => {
    carouselMealsApi('name?q=');
  }, []);

  return (
    <div>
      <div
        className="carousel-container"
      >
        { carouselResults.slice(0, seis).map((item, index) => (
          <div
            className="carousel-card"
            key={ index }
            data-testid={ `${index}-recommendation-card` }
          >
            <div>
              <span>
                <h4
                  data-testid={ `${index}-recommendation-title` }
                >
                  {carouselResults[index].title}
                </h4>
                <img
                  width="175"
                  src={ carouselResults[index].image }
                  alt="image1"
                />
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default RecipeCard;
