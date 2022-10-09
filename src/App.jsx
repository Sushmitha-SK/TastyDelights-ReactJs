import './App.css';
import Search from './components/Search'
import Pages from './pages/Pages'
import { Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    < >
      <BrowserRouter>
        <div>
          <div className="header">
            <Link to={"/"} className="logo"> <i className="fas fa-utensils"></i> Tasty Delights </Link>
            <Search />
          </div>
        </div>
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
