import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const SubmissionForm = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = () => {};
  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 border-2 bg-fuchsia-100 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1 text-base my-auto">
            <p className="font-medium text-2xl">Submission form</p>
            <p className="text-base">
              Please carefully fill out the form and submit the assignment.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                defaultValue={user?.displayName}
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                PDF/DOC Link:
              </label>
              <input
                id="website"
                type="text"
                placeholder="https://"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Quick Note:
              </label>
              <textarea
                id="bio"
                placeholder=""
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              ></textarea>
            </div>
            <div className="col-span-full">
              <div className="flex items-center space-x-2">
                <Link
                  type="button"
                  to="/mysubmitted"
                  onClick={() => handleSubmit()}
                  className="px-4 btn btn-info w-full text-white font-bold text-xl py-2 border rounded-md dark:border-gray-800"
                >
                  Submit Assignment
                </Link>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default SubmissionForm;
