import './App.css';
import PhotoCard from './components/PhotoCard/PhotoCard';
import Photos from './components/Photos/Photos';
import Users from './components/Users/Users';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`users`}>Users</Link>
            </li>
            <li>
              <Link to={`photos`}>Photos</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </>
    
  );
}

export default App;
