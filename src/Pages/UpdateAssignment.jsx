import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateAssignment = () => {
  const updateAssignment = useLoaderData();
  // console.log(updateAssignment);
  const [startDate, setStartDate] = useState(new Date());
  const [difficultyLevel, setDifficultyLevel] = useState("Easy");
  const navigate = useNavigate();

  const handleDifficulty = (e) => {
    const level = e.target.value;
    setDifficultyLevel(level);
  };

  const handleUpdateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const titleName = form.titleValue.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const difficulty = difficultyLevel;
    const descriptions = form.descriptions.value;

    const assignmentData = {
      titleName,
      marks,
      thumbnail,
      difficulty,
      descriptions,
    };
    fetch(`http://localhost:5000/assignments/${updateAssignment._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Assignment Updated Successfully");
        navigate("/assignments");
      });
  };
  return (
    <div>
      <form
        onSubmit={handleUpdateAssignment}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className=" p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div>
            <p className="text-center text-stone-600 text-2xl font-semibold my-2">
              Update Form :{" "}
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 border-2 bg-pink-100 p-4 rounded-xl">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="firstname" className="text-xl ">
                Title of the Assignment
              </label>
              <input
                id="firstname"
                type="text"
                name="titleValue"
                defaultValue={updateAssignment.titleName}
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <label htmlFor="lastname" className="text-xl ">
                Total Marks
              </label>
              <input
                id="marks"
                type="number"
                name="marks"
                defaultValue={updateAssignment.marks}
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-3 sm:col-span-3">
              <label htmlFor="email" className="text-xl ">
                Thumbnail Image URL
              </label>
              <input
                id="thumbnail"
                type="text"
                name="thumbnail"
                defaultValue={updateAssignment.thumbnail}
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <br />
            <div className="col-span-3">
              <label htmlFor="difficulty" className="text-xl ">
                Difficulty Level:
              </label>
              <select
                className="p-2"
                defaultValue={updateAssignment.difficultyLevel}
                onChange={handleDifficulty}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="col-span-3">
              <label htmlFor="city" className="text-xl ">
                Due Date:
              </label>
              <ReactDatePicker
                className="p-2"
                selected={new Date()}
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
                defaultValue={updateAssignment.descriptions}
                className="w-full pl-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <input
              type="submit"
              className="text-base text-white btn btn-secondary col-span-full"
              value="Update Assignment"
            />
          </div>
        </fieldset>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateAssignment;
