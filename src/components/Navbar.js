import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn
        ? (<>
            <Link to="/projects">
              <button>Projects</button>
            </Link>
            <button>Logout</button>
            <span>{user.name}</span>
          </>)
        : <Link to="/login"> <button>Login</button> </Link>
      }
    </nav>
  );
}

export default Navbar;