import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const AssignmentCard = ({ assignment }) => {
  const { user } = useContext(AuthContext);
  const { _id, thumbnail, titleName, marks, postedUserEmail, difficulty } =
    assignment;
  const handleDelete = (_id) => {
    if (user.email !== postedUserEmail)
      return alert("Action not Permissible !!");
    // console.log(_id);
    fetch(`http://localhost:5000/assignments/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Assignment Deleted Successfully");
        }
      });
  };
  return (
    <div className="card lg:card-side border-2 bg-base-100 shadow-xl">
      <figure>
        <img
          src={
            thumbnail
              ? thumbnail
              : "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          }
          alt="Album"
          className="h-full"
        />
      </figure>
      <div className="card-body bg-pink-100">
        <h2 className="card-title">{titleName}</h2>
        <div>Total Marks : {marks}</div>
        <div>
          Difficulty :
          <div className="badge badge-secondary ml-2">{difficulty}</div>
        </div>
        <div>
          Posted User Email:
          <div className="badge badge-secondary ml-2">{postedUserEmail}</div>
        </div>
        <div className="flex gap-1">
          <div className="card-actions justify-start">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error text-white font-semibold"
            >
              Delete
            </button>
          </div>
          <div className="card-actions justify-center">
            <Link
              to={`/updateAssignment/${_id}`}
              className="btn text-white font-bold btn-success btn-outline"
            >
              Update
            </Link>
          </div>
        </div>
        <div className="card-actions">
          <Link
            to={`/assignmentDetails/${_id}`}
            className="btn w-full btn-primary"
          >
            View Assignment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
