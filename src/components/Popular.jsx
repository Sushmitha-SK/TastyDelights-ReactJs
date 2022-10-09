import React, { useState, useEffect } from 'react'
import '../components/Popular.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';


function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes)
        console.log(data.recipes)
    }

    return (
        <>
            <div className="container">
                <div className="heading">
                    <span>Popular Picks</span>
                    <h3>our special dishes</h3>
                </div>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,

                    drag: 'free',
                    gap: '1rem',
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
                    {popular.map(recipe => {
                        return (
                            <SplideSlide key={recipe.id} >
                                <div className="box-container">

                                    <div className="box">
                                        <Link to={'/recipe/' + recipe.id} className="linkStyle">
                                            <div className="card card-block">
                                                <img src={recipe.image} alt={recipe.title} />
                                                <h5 className="card-title mt-3 mb-3">{recipe.title}</h5>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>
        </>
    )
}

export default Popular