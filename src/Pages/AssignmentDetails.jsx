import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
  const { user } = useContext(AuthContext);
  const assignment = useLoaderData();
  // console.log(assignment);
  const navigate = useNavigate();
  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const titleName = form.titleValue.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const postedUserEmail = form.email.value;
    const difficulty = form.difficulty.value;
    const dueDate = form.date.value;
    const descriptions = form.descriptions.value;

    const assignmentData = {
      titleName,
      marks,
      thumbnail,
      postedUserEmail,
      difficulty,
      descriptions,
      dueDate,
    };
    // console.log(assignmentData);
    fetch("http://localhost:5000/mysubmitted", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Submitted Successfully !!",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/submission");
        }
      });
  };
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <form
          className="container flex flex-col mx-auto space-y-3 w-2/3"
          onSubmit={handleSubmitAssignment}
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6  shadow-sm dark:bg-gray-50">
            <div className="col-span-full lg:col-span-3 p-4">
              <div className="flex text-xl">
                <label htmlFor="firstname" className="font-bold">
                  Title of the Assignment:
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="titleValue"
                  defaultValue={assignment.titleName}
                  disabled
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="flex text-lg">
                <label htmlFor="lastname" className="font-bold">
                  Total Marks
                </label>
                <input
                  id="marks"
                  type="number"
                  name="marks"
                  defaultValue={assignment.marks}
                  disabled
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className=" flex text-lg">
                <label htmlFor="email" className="font-bold">
                  Thumbnail Image URL
                </label>
                <input
                  id="thumbnail"
                  type="text"
                  name="thumbnail"
                  defaultValue={assignment.thumbnail}
                  disabled
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className=" flex text-lg">
                <label htmlFor="email" className="font-bold">
                  Submitted User Email:
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={assignment.postedUserEmail}
                  disabled
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <br />
              <div className=" flex text-lg">
                <label htmlFor="difficulty" className="font-bold">
                  Difficulty Level:
                </label>
                <input
                  type="text"
                  name="difficulty"
                  disabled
                  defaultValue={assignment.difficulty}
                />
              </div>
              <div className=" flex text-lg">
                <label htmlFor="city" className="font-bold">
                  Submission Date:
                </label>
                <input
                  type="text"
                  name="date"
                  defaultValue={assignment.dueDate}
                  disabled
                />
              </div>
              <div className="text-lg">
                <label htmlFor="" className="font-bold">
                  Descriptions:
                </label>
                <textarea
                  id="description"
                  type="text"
                  name="descriptions"
                  defaultValue={assignment.descriptions}
                  disabled
                  className="w-full pl-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <input
                type="submit"
                className="text-lg text-white btn btn-info col-span-full"
                value="Take Assignment"
              />
            </div>
          </fieldset>
        </form>
        <div className="lg:w-1/3 border border-red-400 dark:bg-gray-100">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <img
              src={assignment.thumbnail}
              alt=""
              className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignmentDetails;
