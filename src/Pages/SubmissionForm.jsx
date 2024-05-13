import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SubmissionForm = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const doclink = form.doclink.value;
    const notes = form.notes.value;

    const submittedAssignments = {
      doclink,
      notes,
    };
    fetch("http://localhost:5000/mysubmitted", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submittedAssignments),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Assignment Submitted Successfully !!",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/mysubmitted");
          form.reset();
        }
      });
  };
  return (
    <div className="p-6 dark:bg-gray-100 dark:text-gray-900">
      <div
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <div className="grid grid-cols-4 gap-6 border-2 bg-fuchsia-100 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1 text-base my-auto">
            <p className="font-medium text-2xl">Submission form</p>
            <p className="text-base">
              Please carefully fill out the form and submit the assignment.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
          >
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
                name="doclink"
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
                name="notes"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              ></textarea>
            </div>
            <div className="col-span-full">
              <div className="flex items-center space-x-2">
                <input
                  type="submit"
                  className="text-lg w-full text-white btn btn-accent col-span-full"
                  value="Submit Assignment"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;
