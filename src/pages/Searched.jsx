import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../pages/Searched.css';

function Searched() {
    const [searchedRecipies, setSearchedRecipies] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipies = await data.json();
        setSearchedRecipies(recipies.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <div className="container">
            <div className="heading">

                <h3 className='my-4'>Search Results</h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
                {searchedRecipies.map((item) => {
                    return (
                        <div className="col" key={item.id}>

                            <Link to={'/recipe/' + item.id} className="linkStyle">
                                <div className="card h-100 ">
                                    <img src={item.image} className="card-img-top " alt="..." />
                                    <div className="card-body">
                                        <h5 className="cardtitle">{item.title}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}





            </div>
        </div>




    )
}

export default Searched