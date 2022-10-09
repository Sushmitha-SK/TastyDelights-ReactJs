import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../pages/Cuisine.css';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipies = await data.json();
    setCuisine(recipies.results);

  };
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);



  return (
    <div className="container">
            <div className="heading">
      
        <h3 className='my-4'>Delicious Cuisine</h3>
    </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
        {cuisine.map((item) => {
          return (
            <div className="col" key={item.id}>
           
              <Link to={"/recipe/" + item.id} className="linkStyle">
              <div className="card h-100 ">
                <img className="card-img-top" src={item.image} alt="" style={{height:"auto"}}/>
                <div className="card-body">
                  <h5 className="cardtitle">{item.title}</h5>
                  {/* <!-- <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> --> */}
                </div>
                </div>
                </Link>
             
            </div>)
        })}

      </div>

    
    </div>

  )
}

export default Cuisine