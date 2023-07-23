import { useContext } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
// import "./Navbar.css";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login')
      })
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/college">Colleges</Link>
      </li>
      <li>
        <Link to="/admission"> Admission</Link>
      </li>
      <li>
        <Link to="/myCollege"> My College</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-black bg-opacity-50 max-w-screen-xl text-black">
        <div className="navbar-start z-10">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-50 rounded-box w-52 text-white"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <div className="flex justify-center items-center gap-2">
              <img src="./logo.png" alt="" className="w-10 md:w-16" />
              <span className="font-extrabold text-transparent text-xl md:text-2xl md: bg-clip-text bg-gradient-to-r from-purple-400 to-amber-500">
                College Spot
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl">{navOptions}</ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL}
                      referrerPolicy="no-referrer"
                      alt=""
                      className="w-10 h-10 rounded-full"
                      title={user.displayName}
                    />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile                      
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a> <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-warning btn-outline"
                  >
                    LogOut <FaSignOutAlt></FaSignOutAlt>
                  </button></a></li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <li className="list-none">
                <Link
                  to="/login"
                  className="btn btn-sm btn-active text-white btn-accent"
                >
                  <FaSignInAlt></FaSignInAlt> Login
                </Link>
              </li>
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default Navbar;
