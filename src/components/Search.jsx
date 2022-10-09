import React, { useState } from 'react'
import '../components/Search.css'
import { FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/:' + input)
        setInput("");
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="p-1 bg-light rounded rounded-pill shadow-sm ">
                    <div className="input-group">
                        <input className="form-control border-0 bg-light" type="text"
                            placeholder="Search..." value={input}
                            onChange={(e) => setInput(e.target.value)} />

                        <div className="input-group-append mx-4 my-1">
                            <FaSearch></FaSearch>
                        </div>
                    </div>
                </div>
            </form>


        </>
    )
}

export default Search