import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Recipe.css';


const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

 

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
      const detailData = await data.json();
      setDetails(detailData);
      console.log(detailData);
    };

    fetchDetails();
  }, [params.name]);
  return (
    <>
      <div className="container">

        <div className='recipe-card'>
          <img src={details.image} alt="" />
          <div className="recipe-card__body">
            <h1 className="recipe-card__heading">{details.title}</h1>
            <h2 className="recipe-card__subhead">{details.diets}</h2>

            <ul className="recipe-card__nav">
              <li >
                <button style={{ background: 'none' }}
                  className={activeTab === 'instructions' ? 'active' : ''}
                  onClick={() => setActiveTab("instructions")}>
                  <h3 className="active">Instructions</h3></button>
                {/* <h3 class="active">Ingredients</h3> */}
              </li>
              <li>
                <button style={{ background: 'none' }}
                  className={activeTab === 'ingredients' ? 'active' : ''}
                  onClick={() => setActiveTab("ingredients")}>
                  <h3>Ingredients</h3> </button>
                {/* <h3>Method</h3> */}
              </li>
            </ul>

            {activeTab === 'instructions' && (

              <div className="recipe-card__ingredients">
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div className="recipe-card__ingredients">
                <ul>
                  {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  )
                  )}
                </ul>

              </div>
            )}

          </div>

        </div>
      </div>

    </>
  )
}

export default Recipe