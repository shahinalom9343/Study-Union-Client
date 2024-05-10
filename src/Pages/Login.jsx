import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Login = () => {
  // const [user, setUser] = useState();
  const { setUser, signIn } = useContext(AuthContext);

  // google login
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const currentUser = result.user;
        // console.log(currentUser);
        setUser(currentUser);
        alert("login successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const object = { email, password };
    signIn(email, password)
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        alert("Login Successful");
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(object);
  };
  return (
    <div>
      <Helmet>
        <title>Study Union | Login</title>
      </Helmet>
      <div className="w-full max-w-xl mx-auto overflow-hidden bg-cyan-100 rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-3xl font-extrabold text-center text-gray-600 dark:text-gray-200">
            Login Here
          </h3>

          <form onSubmit={handleLogin}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
              >
                Forget Password?
              </a>

              <input
                type="submit"
                className=" font-semibold text-base px-5 py-2 rounded-lg bg-green-500 text-white"
                value="Sign In"
              />
            </div>
          </form>
        </div>
        <div className="text-center font-extrabold text-xl text-red-500 my-6">
          Or
        </div>
        <div className="mb-3 font-bold flex justify-center items-center gap-3">
          <div>
            <button onClick={handleGoogleSignIn} className="btn btn-primary">
              <span>Login With</span>
              <div className="text-xl">
                <FaGoogle></FaGoogle>
              </div>
            </button>
          </div>
          <div>
            {" "}
            <button className=" btn btn-secondary">
              <span>Login With</span>
              <div className="text-xl">
                <FaGithub></FaGithub>
              </div>
            </button>
          </div>
          <div>
            <button className="btn btn-accent">
              <span>Login With</span>
              <div className="text-xl">
                <FaFacebook></FaFacebook>
              </div>
            </button>
          </div>
        </div>
        <div className="flex bg-amber-100 items-center justify-center py-4 text-center  dark:bg-gray-700">
          <span className="text-base dark:text-gray-200">
            Do not have an account?{" "}
          </span>

          <Link
            to="/register"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
