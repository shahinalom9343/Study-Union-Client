import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";

const AllAssignments = () => {
  const assignments = useLoaderData();

  // delete function
  const handleDelete = (_id) => {
    // console.log(_id);
    fetch(`http://localhost:5000/assignments/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          alert("Assignment Deleted Successfully");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Study Union | Assignments</title>
      </Helmet>
      <div className="flex mx-auto justify-center items-center mb-28">
        <div>Category By :</div>
        <div className="flex justify-center items-center">
          <div>
            <details className="dropdown flex">
              <summary className="m-1 btn">
                <div>Difficulty</div>
                <div className="text-xl">
                  <span>
                    <IoIosArrowDropdown />
                  </span>
                </div>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Easy</a>
                </li>
                <li>
                  <a>Medium</a>
                </li>
                <li>
                  <a>Hard</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="card lg:card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body bg-pink-100">
              <h2 className="card-title">{assignment.titleName}</h2>
              <div>Total Marks : {assignment.marks}</div>
              <div>
                Difficulty :
                <div className="badge badge-secondary ml-2">
                  {assignment.difficulty}
                </div>
              </div>
              <div className="flex gap-1">
                <div className="card-actions justify-start">
                  <button
                    onClick={() => handleDelete(assignment._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </div>
                <div className="card-actions justify-center">
                  <Link
                    to={`/updateAssignment/${assignment._id}`}
                    className="btn text-white font-bold btn-success btn-outline"
                  >
                    Update
                  </Link>
                </div>
              </div>
              <div className="card-actions">
                <Link
                  to={`/assignmentDetails/${assignment._id}`}
                  className="btn w-full btn-primary"
                >
                  View Assignment
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAssignments;
