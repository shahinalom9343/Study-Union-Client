import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PrivateRoutes from "../Routes/PrivateRoutes";
import logoStudy from "../../public/icon.png";

AOS.init();

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // sign out
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/assignments">Assignments</NavLink>
      </li>
      <PrivateRoutes>
        <li>
          <NavLink to="/createassignments">Create Assignments</NavLink>
        </li>
      </PrivateRoutes>
      <PrivateRoutes>
        <li>
          <NavLink to="/pendingassignments">Pending Assignments</NavLink>
        </li>
      </PrivateRoutes>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div
      className="navbar text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl font-bold"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex">
          <img src={logoStudy} className="h-10 w-10 mr-[-1px]" alt="" />
          <Link to="/" className="text-2xl font-bold btn btn-ghost">
            Study Union
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end mr-4">
        <label className="text-5xl mr-1 cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            onChange={handleTheme}
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full lg:tooltip" data-tip="hello">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL ||
                    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2 z-10 shadow bg-teal-800 text-white font-bold rounded-box w-60"
            >
              <li>
                <Link to="/mysubmitted">My attemped Assignments</Link>
              </li>

              <li>
                <button
                  className="btn btn-outline text-white"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="text-xl font-bold text-white btn btn-accent mr-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-xl font-bold text-white btn btn-secondary"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
