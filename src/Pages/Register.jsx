import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import welcomeImg from "../assets/welcome.png";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // const object = { name, email, password };
    // console.log(object);

    if (password.length < 6) {
      alert("Password at least 6 characters");
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      alert("Password must be at least 1 uppercase & 1 uppercase leeter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Created Successfully !!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="">
      <Helmet>
        <title>Study Union | Registration</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <img
            className="flex lg:mt-24 justify-center"
            src={welcomeImg}
            alt=""
          />
        </div>
        <div className="col-span-2 flex flex-col bg-slate-100 w-full mx-auto border-2 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <p className="text-3xl font-extrabold text-cyan-800 text-center">
            Registration
          </p>
          <form onSubmit={handleRegister} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="abc@example.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  id="photoURL"
                  placeholder="Your PhotoURL here"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  required
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button className="btn btn-secondary w-full font-bold text-xl">
                  <input type="submit" value="Register" />
                </button>
              </div>
            </div>
          </form>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Already Have an account? Please
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="ml-2 text-xl font-bold text-pink-700 hover:underline dark:text-violet-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
