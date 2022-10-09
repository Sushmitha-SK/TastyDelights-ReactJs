import React from 'react'
import '../components/Category.css'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiCoffeeCup } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const Category = () => {
    let iconStyles = { color:'#130f40', fontSize: "1.5em" };
    return (
        <>
            <div className="container">
                <div className="category">
                <div className="categorylist">

               
                    <NavLink to={'/cuisine/Indian'} className="box">
                        <GiCoffeeCup size={45} style={iconStyles}/>
                        <h4>Indian</h4>
                    </NavLink>
                    <NavLink to={'/cuisine/Italian'} className="box">
                        <FaPizzaSlice size={45} style={iconStyles}/>
                        <h4>Italian</h4>
                    </NavLink>
                    <NavLink to={'/cuisine/American'} className="box">
                        <FaHamburger size={45} style={iconStyles}/>
                        <h4>American</h4>
                    </NavLink>
                    <NavLink to={'/cuisine/Thai'} className="box">
                        <GiNoodles size={45} style={iconStyles}/>
                        <h4>Thai</h4>
                    </NavLink>

                </div>
                </div>
            </div>
        </>
    )
}

export default Category