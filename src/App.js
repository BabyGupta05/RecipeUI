
import './App.css';

function App() {
  return (
    <div className="recipe-container">
      <div className="imageBox">
        <img src="/assets/images/image-omelette.jpeg" alt="omelette image" />
      </div>
      <div className="recipe-information">
        <div className="recipe-intro">
        <h1 className="recipe-title">Simple Omellete recipe</h1>
        <p className="recipe-description">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        </div>
        <div className="recipe-preparation-time">
          <h3 className="recipe-preparation-title">Preparation time</h3>
          <ul>
            <li><span>Total:</span> Approximately 10 minutes</li>
            <li><span>Preparation:</span> 5 minutes</li>
            <li><span>Cooking:</span> 5 minutes</li>
          </ul>
        </div>

        <div className="recipe_ingredients">
          <h3 className="recipe_ingredients_title">Ingredients</h3>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>
        <hr />
        <div className="recipe-instruction">
          <h3>Instructions </h3>
          <ol>
            <li> <span>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
              You can add a tablespoon of water or milk for a fluffier texture.</li>

            <li><span>Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>

            <li><span></span>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
              the eggs evenly coat the surface.</li>

            <li><span></span>Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the
              middle, sprinkle your chosen fillings over one half of the omelette.</li>

            <li><span>Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a plate.</li>

            <li><span>Enjoy</span>: Serve hot, with additional salt and pepper if needed.</li>
          </ol>
        </div>
        <hr />
        <div className="recipe-nutrition">
          <h3>Nutrition</h3>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <table>
            <tr>
              <th>Calories</th>
              <td>277kcal</td>
            </tr>

            <tr>
              <th>Carbs</th>
              <td>0g</td>
            </tr>

            <tr>
              <th>Protein</th>
              <td>20g</td>
            </tr>

            <tr>
              <th>Fat</th>
              <td>22g</td>
            </tr>

          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
