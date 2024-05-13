import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const CreateAssignments = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [difficultyLevel, setDifficultyLevel] = useState("Easy");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleDifficulty = (e) => {
    const level = e.target.value;
    setDifficultyLevel(level);
  };

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const titleName = form.titleValue.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const postedUserEmail = form.email.value;
    const difficulty = difficultyLevel;
    const dueDate = startDate;
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
    fetch("http://localhost:5000/assignments", {
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
            title: "Assignment Created Successfully !!",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/assignments");
          form.reset();
        }
      });
  };
  return (
    <div className="px-4 dark:bg-gray-100 dark:text-gray-900">
      <Helmet>
        <title>Study Union | Create Assignment</title>
      </Helmet>
      <form
        className="container flex flex-col mx-auto space-y-12"
        onSubmit={handleCreateAssignment}
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1 flex flex-col justify-center items-center">
            <p className="font-bold text-xl text-start">Create an Assignment</p>
            <p className="text-xl ">
              You can create an assignment by filling in the form here...
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 border-2 bg-violet-100 p-4 rounded-xl">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="firstname" className="text-xl ">
                Title of the Assignment
              </label>
              <input
                id="firstname"
                type="text"
                name="titleValue"
                placeholder="Title"
                required
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="lastname" className="text-xl ">
                Total Marks
              </label>
              <input
                id="marks"
                type="number"
                name="marks"
                required
                placeholder="Total marks"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="email" className="text-xl ">
                Thumbnail Image URL
              </label>
              <input
                id="thumbnail"
                type="text"
                name="thumbnail"
                required
                placeholder="Image URL"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="email" className="text-xl ">
                Posted User Email:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={user?.email}
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <br />
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="difficulty" className="text-xl ">
                Difficulty Level:
              </label>
              <select
                className="p-2"
                value={difficultyLevel}
                required
                onChange={handleDifficulty}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="city" className="text-xl ">
                Due Date:
              </label>
              <DatePicker
                className="p-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="col-span-full ">
              <label htmlFor="email" className="text-xl ">
                Description
              </label>
              <textarea
                id="description"
                type="text"
                name="descriptions"
                required
                className="w-full pl-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <input
              type="submit"
              className="text-lg text-white btn btn-info col-span-full"
              value="Create Assignment"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAssignments;
