import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import '../components/Veggie.css'

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');
        if (check) {
            setVeggie(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes)
            console.log(data.recipes)
        }
    }

    return (
        <>
            <div className="container">
                <div className="heading">
                    <span>Our Vegetarian Picks</span>
                    <h3>our special dishes</h3>
                </div>

                <div className="category">

                    <Splide options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '3rem',
                        breakpoints: {
                            1024: {
                                perPage: 3,

                            },
                            767: {
                                perPage: 2,

                            },
                            640: {
                                perPage: 1,

                            },
                        },
                        focus: "center",
                    }}>
                        {veggie.map((recipe) => {
                            return (

                                <SplideSlide key={recipe.id} >
                                    <div className="container mt-3">
                                        <div className="row">
                                            <div className="col-md-2 col-sm-6 columnVeggie">

                                                <Link to={'/recipe/' + recipe.id} className="linkStyle">
                                                    <img src={recipe.image} alt={recipe.title} />
                                                    <h3>{recipe.title}</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            );
                        })}

                    </Splide>

                </div>
            </div>

        </>
    )
}

export default Veggie